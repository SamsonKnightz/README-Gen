// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `[![License: ${license}](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/${license})`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `[${license}](https://opensource.org/licenses/${license})`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `${renderLicenseBadge(license)}(https://opensource.org/licenses/${license}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `

  # ${data.Title}
  
  ${renderLicenseSection(data.license)}

  ## Description
  
  ${data.Description}
  
  ## Table Of Contents
  
  * [Installation](#Installation)
  
  * [Usage](#Usage)
  
  * [License](#License)
  
  * [Contributing](#Contributing)
  
  * [Tests](#Tests)
  
  * [Questions](#Questions)
  
  
  ## Installation

  \`\`\`
  ${data.Installation}
  \`\`\`

  ## Usage
  
  \`\`\`
  ${data.Usage}
  \`\`\`
  
  ## License
  
  Licened under ${renderLicenseLink(data.license)}
  
  ## Contributing
  
  You could contribute to my project by sending me a message on github.

  ${data.Contributing}
  
  ## Tests
  
  In order to get the test to run, please enter the commands
  
  \`\`\`
  ${data.Test}
  \`\`\`
  
  ## Questions
  
  If you have any questions about the repo, please contact me at (https://github.com/${data.github}) 
  or email me at ${data.email}
  
  ${data.Questions}
  
  
  `;
}

module.exports = generateMarkdown;
