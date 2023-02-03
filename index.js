// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const prompt = inquirer.createPromptModule();
const generateMarkdown = require(`./utils/generateMarkdown`)


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
        choices: ["MIT", "other", "GPLv2", "Apache", "GPLv3"]
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

    }

];
// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {

};

function init() {
    prompt(questions)
    .then((answers) => {
        const result = generateMarkdown(answers);
        console.log(result);
    })
};


// TODO: Create a function to initialize app
init();

