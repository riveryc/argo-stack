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
    var projectName = this.configOptions.projectName
    var cloudPlatform = this.configOptions.cloudPlatform
    var region = this.configOptions.region

    this.fs.copyTpl(
      this.templatePath("app/app-dev.yaml"),
      this.destinationPath(projectName + "/dev/" + projectName + "-" + cloudPlatform + "-" + region + ".yaml"),
      this.configOptions
    );

    this.fs.copyTpl(
      this.templatePath("values/values.yaml"),
      this.destinationPath(projectName + "/services/" + projectName + "/values.yaml"),
      this.configOptions
    );

    this.fs.copyTpl(
      this.templatePath("values/dev/values.yaml"),
      this.destinationPath(projectName + "/services/" + projectName + "/dev/values.yaml"),
      this.configOptions
    );

    this.fs.copyTpl(
      this.templatePath("values/dev/region-values.yaml"),
      this.destinationPath(projectName + "/services/" + projectName + "/dev/" + cloudPlatform + "-" + region + "-values.yaml"),
      this.configOptions
    );
  }

  end() {
    this.log(`Application ${this.configOptions.projectName} generated successfully`);
  }
};
