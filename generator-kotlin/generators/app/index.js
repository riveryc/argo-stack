"use strict";
const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.configOptions = this.options.configOptions || {};
  }

  initializing() {
    this.log("Generating SpringBoot Application");
  }

  configuring() {
    const userConfig = this.config.getAll();
    Object.assign(this.configOptions, userConfig);
  }

  writing() {
    var companyName = this.configOptions.companyName
    var domainName = this.configOptions.domainName
    var projectName = this.configOptions.projectName
    var appName = this.configOptions.appName
    var buildType = this.configOptions.buildType
    var targetFolder = this.configOptions.targetFolder

    var path = ("com." + companyName + "." + domainName + "." + appName).replace(/\./g, '/')

    if (buildType === "gradle") {
      this.fs.copyTpl(
        this.templatePath("build/gradle/**"),
        this.destinationPath(targetFolder + "/"),
        this.configOptions,
        null,
        { globOptions: { dot: true } }
      );

      this.fs.copyTpl(
        this.templatePath("app-start/build/gradle"),
        this.destinationPath(targetFolder + "/" + projectName + "-start"),
        this.configOptions
      );

      this.fs.copyTpl(
        this.templatePath("app-sdk/build/gradle"),
        this.destinationPath(targetFolder + "/" + projectName + "-sdk"),
        this.configOptions
      );
    }

    this.fs.copyTpl(
      this.templatePath("app-start/src"),
      this.destinationPath(targetFolder + "/" + projectName + "-start/src/main/kotlin/" + path),
      this.configOptions
    );

    this.fs.copyTpl(
      this.templatePath("app-start/src-resource"),
      this.destinationPath(targetFolder + "/" + projectName + "-start/src/main/resources"),
      this.configOptions
    );

    this.fs.copyTpl(
      this.templatePath("app-sdk/src"),
      this.destinationPath(targetFolder + "/" + projectName + "-sdk/src/main/kotlin/" + path + "/sdk"),
      this.configOptions
    );

    this.fs.copyTpl(
      this.templatePath("app-sdk/src-resource"),
      this.destinationPath(targetFolder + "/" + projectName + "-sdk/src/main/resources/"),
      this.configOptions
    );

    this.fs.copyTpl(
      this.templatePath("app-start/test"),
      this.destinationPath(targetFolder + "/" + projectName + "-start/src/test/kotlin/" + path + "/test"),
      this.configOptions
    );

    this.fs.copyTpl(
      this.templatePath("app-start/test-resource"),
      this.destinationPath(targetFolder + "/" + projectName + "-start/src/test/resources"),
      this.configOptions
    );

    this.fs.copyTpl(
      this.templatePath("app-sdk/test"),
      this.destinationPath(targetFolder + "/" + projectName + "-sdk/src/test/kotlin/" + path + "/sdk/test"),
      this.configOptions
    );

    this.fs.copyTpl(
      this.templatePath("app-sdk/test-resource"),
      this.destinationPath(targetFolder + "/" + projectName + "-sdk/src/test/resources"),
      this.configOptions
    );
  }

  end() {
    this.log(`Application ${this.configOptions.projectName} generated successfully`);
  }
};
