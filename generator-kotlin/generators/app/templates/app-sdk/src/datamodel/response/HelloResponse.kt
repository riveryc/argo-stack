package com.<%= companyName %>.<%= domainName %>.<%= appName %>.sdk.datamodel.response

import com.airwallex.foundation.core.common.datamodel.DataEntity

data class HelloResponse(
    val message: String
) : DataEntity()