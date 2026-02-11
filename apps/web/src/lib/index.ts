/**
 * @cradle/wallet-auth
 *
 * Wallet authentication with RainbowKit and wagmi
 * Provides ready-to-use wallet connection for Web3 applications
 *
 * @example
 * ```tsx
 * import { WalletProvider, createWalletConfig, useWalletAuth } from '@cradle/wallet-auth';
 * import { ConnectButton } from '@rainbow-me/rainbowkit';
 *
 * const config = createWalletConfig({
 *   appName: 'My DApp',
 *   projectId: 'your-walletconnect-project-id',
 * });
 *
 * function App() {
 *   return (
 *     <WalletProvider config={config}>
 *       <ConnectButton />
 *     </WalletProvider>
 *   );
 * }
 *
 * function WalletStatus() {
 *   const { status, connect, disconnect } = useWalletAuth();
 *
 *   if (status.isConnected) {
 *     return (
 *       <div>
 *         <p>Connected: {status.address}</p>
 *         <button onClick={disconnect}>Disconnect</button>
 *       </div>
 *     );
 *   }
 *
 *   return <button onClick={connect}>Connect Wallet</button>;
 * }
 * ```
 */
export {
  CHAIN_IDS,
  RPC_ENDPOINTS,
  FACTORY_ADDRESSES,
  ERC721_ABI,
  NFT_FACTORY_ABI,
  type SupportedNetwork,
} from './constants';
export type {
  CollectionInfo,
  NFTInfo,
  BalanceInfo,
  TransactionState,
  AsyncState,
  UseERC721InteractionsOptions,
  UseERC721InteractionsReturn,
} from './types';
export {
  getCollectionInfo,
  getBalance,
  getNFTInfo,
  mint,
  transferFrom,
  safeTransferFrom,
  approve,
  setApprovalForAll,
  burn,
  setBaseUri,
  pause,
  unpause,
  transferOwnership,
} from './interactions';
export {
  useERC721Interactions,
} from './hooks';
export { ERC721InteractionPanel } from './ERC721InteractionPanel';
export { cn } from './cn';
export {
    createWalletConfig,
    createConfigFromEnv,
} from './config';
export {
    WalletProvider,
    type WalletProviderProps,
} from './providers';
export { ConnectButton } from '@rainbow-me/rainbowkit';
export {
    useAccount,
    useBalance,
    useChainId,
    usePublicClient,
    useWalletClient,
} from 'wagmi';
