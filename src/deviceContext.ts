import type { LDSingleKindContext } from "launchdarkly-js-client-sdk"

import UAParser from "ua-parser-js"
import { v4 as UUIDv4 } from "uuid"

type GetDeviceContext = () => LDSingleKindContext

const key = UUIDv4()
const userAgent = UAParser()

const getDeviceContext: GetDeviceContext = () => {
    return {
        key,
        kind: "device",
        os: userAgent.os,
        browser: userAgent.browser,
        device: userAgent.device,
        engine: userAgent.engine,
    }
}

export default getDeviceContext