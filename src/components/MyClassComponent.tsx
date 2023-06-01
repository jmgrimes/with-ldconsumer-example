import React from "react"
import { withLDConsumer } from "launchdarkly-react-client-sdk"

import LDProps from "./LDProps"

// When using a Class Component, you need to include properties for LDClient and flags.
// These properties are injected via the withLDConsumer function.
interface ClassBasedComponentProps extends LDProps {}

class ClassBasedComponent extends React.Component<ClassBasedComponentProps> {
    render() {
        const { ldClient, flags } = this.props
        return (
            <div>
                <h1>Class Based Component</h1>
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
}

// When using a Class Component, use the withLDConsumer function to wrap the component.
// This function injects the LaunchDarkly Client and flags to your component by fetching it from the provider.
// If you don't need the flags and prefer to use LDClient directly, you can specify "clientOnly" as true.
export default withLDConsumer({clientOnly: false})(ClassBasedComponent)