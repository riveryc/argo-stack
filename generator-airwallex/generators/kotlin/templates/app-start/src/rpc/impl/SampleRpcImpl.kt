package com.<%= companyName %>.<%= domainName %>.<%= appName %>.rpc.impl

import com.airwallex.foundation.core.common.constant.StatusCode
import com.airwallex.foundation.core.rpc.datamodel.RpcSingleResponse
import com.<%= companyName %>.<%= domainName %>.<%= appName %>.sdk.datamodel.request.HelloRequest
import com.<%= companyName %>.<%= domainName %>.<%= appName %>.sdk.datamodel.response.HelloResponse
import com.<%= companyName %>.<%= domainName %>.<%= appName %>.sdk.rpc.SampleRpc
import com.<%= companyName %>.<%= domainName %>.<%= appName %>.service.HelloService
import com.googlecode.jsonrpc4j.spring.AutoJsonRpcServiceImpl
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service


/**
 * Sample rpc impl
 *
 */
@Service
@AutoJsonRpcServiceImpl
class SampleRpcImpl : SampleRpc {
    @Autowired
    private lateinit var helloService: HelloService

    override fun sayHello(request: HelloRequest): RpcSingleResponse<HelloResponse> {
        val response = HelloResponse(
            message = helloService.sayHello(request.name)
        )

        return RpcSingleResponse(StatusCode.OK.value, response)
    }
}