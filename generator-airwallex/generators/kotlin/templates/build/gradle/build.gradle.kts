plugins {
    id("com.airwallex.starter") version "1.0.4"
}

object Versions {
    const val AIRWALLEX_CORE = "1.0.18"
    const val OK_HTTP3 = "4.4.0"
}

allprojects {
    group = "com.<%= companyName %>.<%= domainName %>.<%= appName %>"

    dependencyManagement {
        dependencies {
            dependency("com.airwallex.foundation:core-common:${Versions.AIRWALLEX_CORE}")
            dependency("com.airwallex.foundation:core-rpc:${Versions.AIRWALLEX_CORE}")
            dependency("com.airwallex.foundation:core-log:${Versions.AIRWALLEX_CORE}")
            dependency("com.squareup.okhttp3:okhttp:${Versions.OK_HTTP3}")
        }
    }
}
