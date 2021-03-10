package com.<%= companyName %>.<%= domainName %>.<%= appName %>.sdk.config

import com.airwallex.foundation.core.rpc.annotation.ScanRpcClient
import org.springframework.context.annotation.Configuration

@Configuration
@ScanRpcClient(
    packageName = "com.<%= companyName %>.<%= domainName %>.<%= appName %>.sdk.rpc",
    addressProperty = "awx.rpc.sample"
)
class MainConfiguration