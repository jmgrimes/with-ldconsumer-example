import React from "react";
import ReactDOM from "react-dom/client"
import { LDSingleKindContext } from "launchdarkly-js-client-sdk"
import { asyncWithLDProvider, withLDProvider } from "launchdarkly-react-client-sdk"

import App from "./App"
import getDeviceContext from "./deviceContext"

import "./index.css"

// Initializing synchronously will render the UI before the LaunchDarkly client is ready, and may result in screen 
// flash if flags control the initial experience.  However, if the LaunchDarkly client fails to initialize due to 
// network segmentation, the UI will still render properly and use default/fallback values.
const initializeSynchronously = (clientSideID: string, device: LDSingleKindContext, root: ReactDOM.Root) => {
  const WrappedApp = withLDProvider({
    clientSideID,
    context: {
      kind: "multi",
      device,
    },
  })(App)
  
  root.render(
    <React.StrictMode>
      <WrappedApp/>
    </React.StrictMode>
  )
}

// Initializing asynchronously will wait to render the UI until the LaunchDarkly client is ready.  This will result 
// in a single render operation with fully initialized flag values, and avoid the possible screen flash associated 
// with synchronous loads.  However, if the LaunchDarkly client fails to initialize due to network segmentation, the 
// UI will not render until an initial connection is established.
const initializeAsynchronously = (clientSideID: string, device: LDSingleKindContext, root: ReactDOM.Root) => {
  asyncWithLDProvider({
    clientSideID,
    context: {
      kind: "multi",
      device,
    },
  }).then(LDProvider =>
    root.render(
      <React.StrictMode>
        <LDProvider>
          <App/>
        </LDProvider>
      </React.StrictMode>
    )
  )
}

(async () => {
  const clientSideID = await Promise.resolve("631a20bbc0dbd612024294e9");
  // const clientSideID = await fetch("/path/to/my-client-side-id")
  //   .then(response => response.json())
  //   .then(response => response.myClientSideID)

  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  )
  const device = getDeviceContext()
  initializeSynchronously(clientSideID, device, root)
  // initializeAsynchronously(clientSideID, device, root)
})()
