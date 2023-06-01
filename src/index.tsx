import React from "react";
import ReactDOM from "react-dom/client"
import { asyncWithLDProvider } from "launchdarkly-react-client-sdk"

import App from "./App"
import getDeviceContext from "./deviceContext"

import "./index.css"

(async () => {
  const clientSideID = await Promise.resolve("my-client-side-id");
  // const clientSideID = await fetch("/path/to/my-client-side-id")
  //   .then(response => response.json())
  //   .then(response => response.myClientSideID)
  
  const device = getDeviceContext()
  const LDProvider = await asyncWithLDProvider({
    clientSideID,
    context: {
      kind: "multi",
      device,
    }
  })

  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  )
  
  root.render(
    <React.StrictMode>
      <LDProvider>
        <App />
      </LDProvider>
    </React.StrictMode>
  )
})()
