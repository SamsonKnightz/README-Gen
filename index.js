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
    },
    {
        type: "input",
        message: "What usage?",
        name: "Usage",
    },
    {
        message: "What license?",
        name: "license",
        type: "list",
        choices: ["MIT", "other", "GPLv2", "Apache", "GPLv3"]
    },
    {
        type: "input",
        message: "What information?",
        name: "information",
    },
    {
        type: "input",
        message: "What contribution?",
        name: "Contributing",
    },
    {
        type: "input",
        message: "Test?",
        name: "Test",
    },
    {
        type: "input",
        message: "Questions?",
        name: "Questions",
    },];
// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {

};

function init() {
    prompt(questions)
};


// TODO: Create a function to initialize app
init();

