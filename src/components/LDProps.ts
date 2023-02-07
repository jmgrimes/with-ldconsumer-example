import { LDClient, LDFlagSet } from "launchdarkly-js-client-sdk"

export default interface LDProps {
    ldClient?: LDClient
    flags?: LDFlagSet
}
