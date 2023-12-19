'use client'
import dynamic from "next/dynamic";

const DAppKitProvider = dynamic(async () => {
    const {DAppKitProvider} = await import('@vechain/dapp-kit-react')
    return DAppKitProvider
}, {
    ssr: false,
})

const ConnectButtonWithModal = dynamic(async () => {
    const {ConnectButtonWithModal} = await import('@vechain/dapp-kit-react')
    return ConnectButtonWithModal
}, {
    ssr: false,
})

export default function Home() {
  return (
    <DAppKitProvider
        nodeUrl="https://testnet.vechain.org/"
        genesis={'test'}
        usePersistence={true}
        walletConnectOptions={{
          projectId: 'my-project-id',
          metadata: {
            name: 'Testing123',
            url: "http://localhost:3000"
          }
        }}
        logLevel="DEBUG"
    >
        <ConnectButtonWithModal />
    </DAppKitProvider>
)
}
