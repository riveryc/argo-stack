module.exports = {
    prompting
};

function prompting() {
    const done = this.async();
    const prompts = [
        {
            type: "string",
            name: "projectName",
            message: "What is the project name?",
            default: "myproject"
        },
        {
            type: "string",
            name: "appName",
            message: "What is the app name?",
            default: "myapp"
        },
        {
            type: "string",
            name: "companyName",
            message: "What is the company name?",
            default: "airwallex"
        },
        {
            type: "list",
            name: "domainName",
            message: "Which domain?",
            choices: [
                {
                    value: "platform",
                    name: "Platform"
                },
                {
                    value: "gtpn",
                    name: "GTPN"
                }
            ],
            default: "gtpn"
        },
        {
            type: "list",
            name: "buildType",
            message: "Which build type?",
            choices: [
                {
                    value: "gradle",
                    name: "Gradle"
                }
            ],
            default: "gradle"
        }
    ];

    this.prompt(prompts).then(answers => {
        Object.assign(this.configOptions, answers);
        done();
    });
}