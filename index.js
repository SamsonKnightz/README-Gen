// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs")

// TODO: Create an array of questions for user input
const prompt = inquirer.createPromptModule();

// TODO: Create a function to write README file
function writeToFile(readMe, )  {
    try {
        fs.writeToSync("createdREADME.md", readMe);
    } catch(err) {
        console.log(err);
    }
}

const generateReadME = (answers) => {
    `# README.MD
    ## Description
    ${answers.Description}
    ## Table Of Contents
    ${answers.TableOfContents}
    ## Installation
    ${answers.Installation}
    ## Usage
    ${answers.Usage}
    ## License
    ${answers.License}
    ## Information
    ${answers.Information}
    ## Contributing
    ${answers.Contributing}`
}

prompt([
    {
        message: "Write a description of README",
        name: "Description",
    },
    {
        message: "What are your table of contents?",
        name: "TableOfContents",
    },
    {
        message: "How do you install?",
        name: "Installation",
    },
    {
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
        message: "What information?",
        name: "information",
    },
    {
        message: "What contribution?",
        name: "contributing",
    },
]).then(generateReadME)
.then(writeToFile)

// TODO: Create a function to initialize app
// function init() {}
// Function call to initialize app

