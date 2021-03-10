package com.<%= companyName %>.<%= domainName %>.<%= appName %>.service

import org.apache.logging.log4j.LogManager
import org.springframework.stereotype.Service

/**
 * Hello service
 *
 */
@Service
class HelloService {
    private val logger = LogManager.getLogger(this::class.java)

    /**
     * Say hello
     *
     * @param name the name of speaker
     * @return hello response
     */
    fun sayHello(name: String): String {
        logger.info("$name is trying to say hello")
        return "hello $name"
    }
}