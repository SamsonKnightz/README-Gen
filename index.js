// we used inquirer prompts to create our prompt module.
// we require our markdown as we call it later in a function.
// We use fs to write our files in sync with our data collected.

const inquirer = require('inquirer');
const prompt = inquirer.createPromptModule();
const generateMarkdown = require(`./utils/generateMarkdown`)
const fs = require(`fs`);


// Here is the array of questions for the prompt module to pass through.
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
// Here is the function to write to the file. When we recieve the filename and data, we perform a try catch, try write to sync the file with the data, otherwise throw error.
const writeToFile = (fileName, data) => {
    try {
        fs.writeFileSync(fileName, data);
    } catch(err) {
        console.log(err);
        process.exit(1);
    }
};

// This is the function procedure of our index.js file. When we run the command node index.js, we will prompt the user with the questions array, then with the answers we will create a markdown using the answers, then write the README file to the location of our dist folder.
function init() {
    prompt(questions)
    .then((answers) => {
        const result = generateMarkdown(answers);
        writeToFile(`./dist/README.md`, result);
    })
};


// Our function that initializes the app.
init();

