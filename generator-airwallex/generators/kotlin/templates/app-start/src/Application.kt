package com.<%= companyName %>.<%= domainName %>.<%= appName %>

import com.airwallex.foundation.core.rpc.annotation.EnableRpcServer
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
@EnableRpcServer
class Application

fun main(args: Array<String>) {
    runApplication<Application>(*args)
}
