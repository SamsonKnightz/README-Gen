// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const prompt = inquirer.createPromptModule();
const generateMarkdown = require(`./utils/generateMarkdown`)
const fs = require(`fs`);


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your project Title?",
        name: "Title",
    },
    {
        type: "input",
        message: "Write a description of README",
        name: "Description",
    },
    {
        type: "input",
        message: "How do you install?",
        name: "Installation",
        default: "npm install"
    },
    {
        type: "input",
        message: "How do you use?",
        name: "Usage",
        default: "node index.js"
    },
    {
        message: "What license?",
        name: "license",
        type: "rawlist",
        default: "MIT",
        choices: ["MIT", "MPL-2.0", "Apache-2.0", "GPLv3"]
    },
    {
        type: "input",
        message: "What contributions?",
        name: "Contributing",
        default: ""
    },
    {
        type: "input",
        message: "Testing instructions?",
        name: "Test",
        default: "npm run test",
    },
    {
        type: "input",
        message: "Questions?",
        name: "Questions",
        default: "",
    },
    {
        type: "input",
        message: "What is your github user name?",
        name: "github",
        default: "githubusername"

    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
        default: "email"

    }

];
// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
    try {
        fs.writeFileSync(fileName, data);
    } catch(err) {
        console.log(err);
        process.exit(1);
    }
};

function init() {
    prompt(questions)
    .then((answers) => {
        const result = generateMarkdown(answers);
        writeToFile(`./dist/README.md`, result);
    })
};


// TODO: Create a function to initialize app
init();

