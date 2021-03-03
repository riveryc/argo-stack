rootProject.name = "<%= projectName %>"
include("<%= projectName %>-start")
include("<%= projectName %>-sdk")

pluginManagement {
    repositories {
        mavenCentral()
        jcenter()
        maven("https://artistry.airwallex.com/repository/lib-release/libs-release-local")
        maven("https://artistry.airwallex.com/repository/lib-snapshot/libs-snapshot-local")
    }
}
