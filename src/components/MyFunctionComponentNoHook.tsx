import React from "react"
import { withLDConsumer } from "launchdarkly-react-client-sdk"

import LDProps from "./LDProps"

// Although you CAN use withLDConsumer on function components in exactly the same way as you can with class components, 
// this is generally not recommended.  Hooks provide the same lift, and a similar enough programming style such that 
// the minor difference isn't that much different.

// When using a Function Component without hooks, you need to include properties for LDClient and flags.
// These properties are injected via the withLDConsumer function.
interface MyFunctionComponentProps extends LDProps {}

const MyFunctionComponent: React.FunctionComponent<MyFunctionComponentProps> = (props) => {
    const { ldClient, flags } = props

    return (
        <div>
            <h1>Function Based Component</h1>
            <p>
                {
                    !ldClient || !flags ? 
                    "Initializing LaunchDarkly Client..." :
                    `Flag Value is ${flags.myFlag}` // or call ldClient.variation("myFlag")
                }
            </p>
        </div>
    )
}

// When using a Function Component without hooks, use the withLDConsumer function to wrap the component.
// This function injects the LaunchDarkly Client and flags to your component by fetching it from the provider.
// If you don't need the flags and prefer to use LDClient directly, you can specify "clientOnly" as true.
export default withLDConsumer({ clientOnly: false })(MyFunctionComponent)