# Cypress Framework
This repository contains the Cypress testing project for my website (local). The project is designed to automate end-to-end tests for the web application, ensuring its functionality.

## Table of Contents
* Prerequisites
* Installation
* Project Structure
* Configuration
* Writing Tests
* Running Tests

### Prerequisites
Before getting started, ensure that you have the following installed on your machine:
```
Node.js (version 14 or higher)
npm (version 6.14.18 or higher)
```
### Installation
Clone this repository to your local machine:
```bash
#!/bin/bash
 git clone https://github.com/rifat71/ete-cypress.git
```
Navigate to the project directory:
```bash
#!/bin/bash
 cd ete-cypress
```
Install the project dependencies:
```bash
#!/bin/bash
 npm install
```

### Project Structure
```
├── cypress/
│   ├── downloads/
│   ├── e2e/
│   │   ├── login.cy.js
│   ├── fixtures/
│   │   ├── example.json
│   ├── screenshots/
│   │   ├── login.cy.js
|   │   |   ├── Login Test -- log in with invalid credentials (failed).png
│   ├── support/
│   │   ├── commands.js
│   │   └── index.js
├── node_modules/
├── resources
├── public/
│   ├── assets
│   │   ├── img
│   │   │   ├── product1.jpeg
│   ├── css
│   │   ├── homePageStyle.css
│   │   └── loginPageStyle.css
│   ├── js 
│   │   ├── loginValidation.js
│   ├── home.html
│   ├── login.html
├── .gitignore
├── cypress.json
├── package-lock.json
├── package.json
├── README.md
```
```
> cypress/: Contains Cypress-specific files and directories.
> fixtures/: Store static data used by tests.
> e2e/: Location for my test files.
> support/: Custom commands and other support files.
> node_modules/: Node.js modules and packages.
> .gitignore: Specifies intentionally untracked files to ignore.
> cypress.json: Cypress configuration file.
> package.json: Node.js project configuration.
> README.md: Project documentation.
> public/: Directory containing HTML and CSS files and js validation file for the web page.
```
### Configuration
```
We can adjust Cypress configuration in >cypress.config.js if necessary. Common configurations include:
baseUrl: "http://127.0.0.1:5500"
Other Cypress configuration options.
```
### Writing Tests
Write tests in the cypress/e2e/ directory. Cypress supports both JavaScript and CoffeeScript for writing tests.

### Running Tests
To run the tests, use the following command:
```bash
#!/bin/bash
 npm run spec fileName
```
To launch the Cypress Test Runner and allow us to run and debug tests interactively:
```
#!/bin/bash
 npx cypress open
```
