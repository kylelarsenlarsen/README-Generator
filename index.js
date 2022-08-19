const inquirer = require('inquirer');
const fs = require('fs');



const readmeGenerator = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: 'What is the title?',
            },
            {
                type: 'input',
                name: 'description',
                message: 'Describe your project?',
            },
            {
                type: 'input',
                name: 'installation',
                message: 'Installation',
            },
            {
                type: 'input',
                name: 'usage',
                message: 'Usage',
            },
            {
                type: 'input',
                name: 'credits',
                message: 'Credits',
            },
            {
                type: 'list',
                name: 'license',
                message: 'License',
                choices: ["GNU", "MIT", "APACHE"]
            },
            {
                type: 'input',
                name: 'features',
                message: 'Features',
            },
            {
                type: 'input',
                name: 'contribution',
                message: 'How to Contribute',
            },
            {
                type: 'input',
                name: 'tests',
                message: 'Tests',
            },
        ])
        .then((answers) => {
            const readmeContent = `
# ${answers.title}

## Description

${answers.description}

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${answers.installation}

## Usage

${answers.usage}

## Credits

${answers.credits}

## Badges

![](https://img.shields.io/badge/License-${answers.license}-brightgreen)

## Features

${answers.features}

## How to Contribute

${answers.contribution}

## Tests

${answers.tests}
            `
            fs.writeFile('dist/README.md', readmeContent, (err) =>
                err ? console.log(err) : console.log('Successfully created README.md!')
            );
        })
}

readmeGenerator();