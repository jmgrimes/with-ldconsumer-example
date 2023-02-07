import React from "react";
import ReactDOM from "react-dom/client"
import { withLDProvider } from "launchdarkly-react-client-sdk"

import App from "./App"
import "./index.css"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

const WrappedApp = withLDProvider({
  clientSideID: "my-client-side-id",
  context: {
    kind: "multi",
    user: {
      key: "my-user-key"
    },
  }
})(App)

root.render(
  <React.StrictMode>
    <WrappedApp />
  </React.StrictMode>
)
