import React from "react"
import { useLDClient, useFlags } from "launchdarkly-react-client-sdk"

// When using a Function Component with hooks, you do not need to include properties for LDClient or flags.
// These properties are fetched from the context with the useLDClient and useFlags hooks.
interface MyFunctionComponentProps {}

const MyFunctionComponent: React.FunctionComponent<MyFunctionComponentProps> = () => {
    const ldClient = useLDClient()
    const flags = useFlags()

    return (
        <div>
            <h1>Function Based Component</h1>
            <p>
                {
                    !ldClient || !flags ? 
                    "Initializing LaunchDarkly Client..." :
                    `Flag Value is ${flags.myTestBooleanFlag}` // or call ldClient.variation("myFlag")
                }
            </p>
        </div>
    )
}

// When using a Function Component with hooks, you do not need to use the withLDConsumer function to wrap the component.
// The hooks automatically expose this by fetching it from the provider themselves.
export default MyFunctionComponent