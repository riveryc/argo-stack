package com.<%= companyName %>.<%= domainName %>.<%= appName %>.sdk.rpc

import com.airwallex.foundation.core.rpc.datamodel.RpcSingleResponse
import com.<%= companyName %>.<%= domainName %>.<%= appName %>.sdk.datamodel.request.HelloRequest
import com.<%= companyName %>.<%= domainName %>.<%= appName %>.sdk.datamodel.response.HelloResponse
import com.googlecode.jsonrpc4j.JsonRpcService


/**
 * Sample rpc
 *
 */
@JsonRpcService("/sample")
interface SampleRpc {

    /**
     * Say hello
     *
     * @param request hello request
     * @return hello response
     */
    fun sayHello(request: HelloRequest): RpcSingleResponse<HelloResponse>
}
