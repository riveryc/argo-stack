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
    var targetFolder = this.configOptions.targetFolder
    var projectName = this.configOptions.projectName
    var locations = this.configOptions.locations

    console.log(locations)

    for(var index in locations){
      var location = locations[index]
      console.log(location)

      var cloudPlatform = location.cloudPlatform
      var region = location.region

      this.configOptions.cloudPlatform = location.cloudPlatform
      this.configOptions.region = location.region
      this.configOptions.clusterAddress = location.clusterAddress

      console.log(this.configOptions)

      this.fs.copyTpl(
        this.templatePath("app/app-dev.yaml"),
        this.destinationPath(targetFolder + "/dev/" + projectName + "-" + cloudPlatform + "-" + region + ".yaml"),
        this.configOptions
      );

      this.fs.copyTpl(
        this.templatePath("values/dev/region-values.yaml"),
        this.destinationPath(targetFolder + "/services/" + projectName + "/dev/" + cloudPlatform + "-" + region + "-values.yaml"),
        this.configOptions
      );
    }

    this.fs.copyTpl(
      this.templatePath("values/values.yaml"),
      this.destinationPath(targetFolder + "/services/" + projectName + "/values.yaml"),
      this.configOptions
    );

    this.fs.copyTpl(
      this.templatePath("values/dev/values.yaml"),
      this.destinationPath(targetFolder + "/services/" + projectName + "/dev/values.yaml"),
      this.configOptions
    );
  }

  end() {
    this.log(`Application ${this.configOptions.projectName} generated successfully`);
  }
};
