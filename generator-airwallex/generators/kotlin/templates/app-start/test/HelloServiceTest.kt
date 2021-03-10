package com.<%= companyName %>.<%= domainName %>.<%= appName %>.test

import com.<%= companyName %>.<%= domainName %>.<%= appName %>.service.HelloService
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest

@SpringBootTest
class HelloServiceTest {
    @Autowired
    private lateinit var helloService: HelloService

    @Test
    fun testSayHello() {
        val message = helloService.sayHello("Airwallex")
        Assertions.assertEquals("hello Airwallex", message)
    }
}
