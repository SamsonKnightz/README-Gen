// This function will render the license badge, the information that was accepted from our index.js will automatically populate using template literal
function renderLicenseBadge(license) {
  return `[![License: ${license}](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/${license})`
}


// This function will render the license link, the information that was accepted from our index.js will automatically populate using template literal
function renderLicenseLink(license) {
  return `[${license}](https://opensource.org/licenses/${license})`
}

// This function will render both our license badge and link for our license section.
function renderLicenseSection(license) {
  return `${renderLicenseBadge(license)}(https://opensource.org/licenses/${license}`
}

// Here when our generate markdown function is performed, using our data from index, we return the generatemarkdown with the data filled out.
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
