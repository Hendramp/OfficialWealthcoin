import { useCallback, useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { CHAIN_HEX, TARGET_CHAIN_ID, WALLETCONNECT_PROJECT_ID } from '../contracts/addresses';

export function useWallet(addToast) {
  const [account, setAccount] = useState('');
  const [chainId, setChainId] = useState(null);
  const [providerSource, setProviderSource] = useState(null);
  const [connecting, setConnecting] = useState(false);

  const readConnection = useCallback(async (rawProvider) => {
    if (!rawProvider) return;
    const provider = new ethers.BrowserProvider(rawProvider);
    const network = await provider.getNetwork();
    const accounts = await provider.send('eth_accounts', []);
    setProviderSource(rawProvider);
    setChainId(Number(network.chainId));
    setAccount(accounts?.[0] || '');
  }, []);

  const connectInjected = useCallback(async () => {
    setConnecting(true);
    try {
      if (!window.ethereum) throw new Error('No browser wallet found. Install MetaMask, Rabby, Coinbase Wallet, or use WalletConnect.');
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      await readConnection(window.ethereum);
      addToast?.('Wallet connected.', 'success');
    } catch (error) {
      addToast?.(error?.message || 'Wallet connection failed.', 'error');
    } finally {
      setConnecting(false);
    }
  }, [addToast, readConnection]);

  const connectWalletConnect = useCallback(async () => {
    setConnecting(true);
    try {
      if (!WALLETCONNECT_PROJECT_ID) throw new Error('WalletConnect is not configured. Add VITE_WALLETCONNECT_PROJECT_ID in Vercel.');
      const { default: EthereumProvider } = await import('@walletconnect/ethereum-provider');
      const wcProvider = await EthereumProvider.init({
        projectId: WALLETCONNECT_PROJECT_ID,
        chains: [TARGET_CHAIN_ID],
        showQrModal: true,
        rpcMap: { [TARGET_CHAIN_ID]: 'https://polygon.drpc.org' }
      });
      await wcProvider.enable();
      await readConnection(wcProvider);
      addToast?.('WalletConnect connected.', 'success');
    } catch (error) {
      addToast?.(error?.message || 'WalletConnect failed.', 'error');
    } finally {
      setConnecting(false);
    }
  }, [addToast, readConnection]);

  const disconnect = useCallback(async () => {
    try {
      if (providerSource?.disconnect) await providerSource.disconnect();
    } catch {}
    setAccount('');
    setProviderSource(null);
    addToast?.('Wallet disconnected.', 'info');
  }, [addToast, providerSource]);

  const switchToPolygon = useCallback(async () => {
    const raw = providerSource || window.ethereum;
    if (!raw?.request) return;
    try {
      await raw.request({ method: 'wallet_switchEthereumChain', params: [{ chainId: CHAIN_HEX }] });
      await readConnection(raw);
    } catch (error) {
      if (error?.code === 4902) {
        await raw.request({
          method: 'wallet_addEthereumChain',
          params: [{
            chainId: CHAIN_HEX,
            chainName: 'Polygon Mainnet',
            nativeCurrency: { name: 'POL', symbol: 'POL', decimals: 18 },
            rpcUrls: ['https://polygon.drpc.org'],
            blockExplorerUrls: ['https://polygonscan.com']
          }]
        });
      } else {
        addToast?.(error?.message || 'Could not switch network.', 'error');
      }
    }
  }, [addToast, providerSource, readConnection]);

  useEffect(() => {
    if (!window.ethereum) return;
    readConnection(window.ethereum);
    const onAccounts = () => readConnection(window.ethereum);
    const onChain = () => readConnection(window.ethereum);
    window.ethereum.on?.('accountsChanged', onAccounts);
    window.ethereum.on?.('chainChanged', onChain);
    return () => {
      window.ethereum.removeListener?.('accountsChanged', onAccounts);
      window.ethereum.removeListener?.('chainChanged', onChain);
    };
  }, [readConnection]);

  return { account, chainId, providerSource, connecting, connectInjected, connectWalletConnect, disconnect, switchToPolygon };
}
