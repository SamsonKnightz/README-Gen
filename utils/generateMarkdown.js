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
  return `# ${data.title}

  # ${data.project}
![GitHub Liscense](https://img.shields.io/badge/license-${data.license})

Check out my other [projects](https://github.com/SamsonKnightz) on github.
## Description

## Table Of Contents

 * [Installation](#Installation)

 * [Usage](#Usage)

 * [Information](#Information)

 * [Contributing](#Contributing)

 * [Tests](#Tests)

 * [Questions](#Questions)
## Installation

## Usage

## Information

## Contributing

## Tests


`;
}

module.exports = generateMarkdown;
