import type { LDContext } from "launchdarkly-js-client-sdk"
import { useLDClient } from "launchdarkly-react-client-sdk"
import React, { useState } from "react"
import { v4 as UUIDv4 } from "uuid"
import getDeviceContext from "../deviceContext"

// When using a Function Component with hooks, you do not need to include properties for LDClient or flags.
// These properties are fetched from the context with the useLDClient and useFlags hooks.
interface LoginComponentProps {}

const LoginComponent: React.FunctionComponent<LoginComponentProps> = () => {
    const ldClient = useLDClient()
    const [emailAddress, setEmailAddress] = useState<string>();
    const [context, setContext] = useState<string>(JSON.stringify(ldClient?.getContext() || "{}"))
    
    const device = getDeviceContext()

    return (
        <div>
            <h1>Login Component</h1>
            <form>
                <div>
                    <label htmlFor="emailAddress">Email</label>
                    <br/>
                    <input type="text" id="emailAddress" name="emailAddress" value={emailAddress}
                        onChange={event => setEmailAddress(event.target.value)}/>
                </div>
                <div>
                    <label htmlFor="context">Context</label>
                    <br/>
                    <textarea rows={10} cols={80} id="context" name="context" value={context}></textarea>
                </div>
                <div>
                    <input type="button" value="Login" 
                        onClick={event => {
                            const newContext: LDContext = {
                                kind: "multi",
                                user: {
                                    key: UUIDv4(),
                                    kind: "user",
                                    emailAddress,
                                    _meta: {
                                        privateAttributes: [
                                            "emailAddress",
                                        ],
                                    },
                                },
                                device
                            }
                            ldClient?.identify(newContext)
                            setContext(JSON.stringify(newContext))
                        }}
                    />
                </div>
            </form>
        </div>
    )
}

// When using a Function Component with hooks, you do not need to use the withLDConsumer function to wrap the component.
// The hooks automatically expose this by fetching it from the provider themselves.
export default LoginComponent