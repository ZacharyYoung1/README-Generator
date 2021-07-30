// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
// TODO: Create an array of questions for user input
inquirer.prompt(
    [
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
      },
      {
        type: 'input',
        message: 'What is your E-Mail address?',
        name: 'email', 
      },
      {
        type: 'input',
        message: 'What is your projects name?',
        name: 'projectname',
      },
      {
        type: 'input',
        message: 'Please write a short description of your project.',
        name: 'description',
        },
    {
        type: 'checkbox',
        message: 'What kind of license does your project have?',
        name: 'license', 
        choices: ["MIT", "GPLv3", "GPL"],
            
          },
    {
        type: 'input',
        message: 'What command should be run to install dependencies?',
        name: 'installation',
         },
    {
        type: 'input',
        message: 'What command should be run to run tests?',
        name: 'test',
             },
    {
        type: 'input',
        message: 'What does your user need to know about using your repo?',
        name: 'usage',
    },

    {
        type: 'input',
        message: 'What does your user need to know about contributing to your repo?',
        name: 'contributions',
             }
            ]).then(({
                github,
                email,
                projectname, 
                description, 
                license, 
                installation,
                test,
                usage,
                contributions
            })=>{
            const template = 
`# a new start 

${license}


## Description

${description}

##Table of contents
    *[Installation](#installation)
    *[Usage](#usage)
    *[License](#license)
    *[Contributing](#contributing)
    *[Tests](#tests)
    *[Questions](#questions)

## Installation

To install necessary dependencies run the following command:
    
    
...
${installation}
...

    
## Usage

${usage}

## License

This project is licensed under the ${license} license.

## Contributing

${contributions}

## Tests 

To run tests, run the following command:

...
${test}
...

## Questions 

If you have any questions about the repo, open an issue or contact me directly at ${email}. You can find more of my work at [${github}](https://github.com/${github}/).`
    writeToFile(projectname, template);
            });
            

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
fs.writeFile(`./${fileName}.md`,data, (err) => {
    if (err){
        console.log(err)
    }
    console.log ("Generating README...");
})
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

