
## About The Project
The project is used to generate a skeleton Kotlin projects with full CI/CD pipeline integrated quickly. It can save a lot of troubles and efforts to improve the productivity and code quality as well. 
Though customization can be supported, it's strongly recommended using the default settings as you go. You can make changes to your project in the future once you have good reasons. 

## Getting Started
### Prerequisites

* install Node.js
* install Yeoman
  ```sh
  npm install -g yo
  ```

### Installation
How to generate a Kotlin project
1. Make sure your prerequisites are met
2. Clone the repo
   ```sh
   git@github.com:awx-zorian/argo-stack.git
   ```
3. Got to Kotlin Generator folder
   ```sh
   cd argo-stack/generator-kotlin
   ```   
4. Install NPM packages
   ```sh
   npm install
   sudo npm link
   ```

## Usage
Make sure you have completed the above steps successfully.
1. Run generator command
   ```sh
   yo airwallex
   ```
2. Input the parameters as prompted

Caution: as the `appName` will used as the package name, make sure it's a correct package name(e.g. do not use `-` in the name)

## Roadmap

## Contributing
Contributions are what make the open source community such an amazing place to be learn, inspire, and create. 
Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/my-improvement`)
3. Commit your Changes (`git commit -m 'Add some Feature'`)
4. Push to the Branch (`git push origin feature/my-improvement`)
5. Open a Pull Request

## Contact
Zorian Li - zorian.li@airwallex.com

Project Link: [Argo-stack](https://github.com/awx-zorian/argo-stack)

## Acknowledgements
