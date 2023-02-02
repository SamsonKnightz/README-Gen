// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `#

  # ${data.Title}
  ![GitHub Liscense](https://img.shields.io/badge/license-${data.license})
  ## Description

  ${data.Description}
  
  ## Table Of Contents
  
   * [Installation](#Installation)

  ${data.Installation}
  
   * [Usage](#Usage)

  ${data.Usage}

   * [License](#License)

    ${data.license}

   * [Contributing](#Contributing)

    ${data.Contributing}

   * [Tests](#Tests)

    ${data.Tes}

   * [Questions](#Questions)

      ${data.Questions}
      
  ## Installation
  
  ## Usage
  
  ## Information
  
  ## Contributing
  
  ## Tests
  
  \`\`\`\
  npm test
  \`\`\`\
  
  ## Questions
  
  If you have any questions about the repo, please contact me at (https://github.com/SamsonKnightz)
  
  
  
`;
}

module.exports = generateMarkdown;
