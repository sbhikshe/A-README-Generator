// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
//title, Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
const questions = [
    {
      type: 'input',
      message: "Please enter a title for your project:",
      name: 'title'
    },
    {
      type: 'confirm', 
      message: "Do you want to add a Table of Contents?", 
      name: 'includeToC'
    },
    {
      type: 'editor', 
      message: "Please enter a description for your project:", 
      name: 'description',
      waitUserInput: true
    },
    {
      type: 'editor',
      message: "Please describe installation instructions:",
      name: 'installation'
    },
    {
      type: 'editor',
      message: "Describe Usage - how is this used?", 
      name: 'usage'
    },
    {
      type: 'list',
      message: "Please choose a license:", 
      name: 'license',
      choices: ['Apache License 2.0',
        'GNU General Public License v3.0',
        'MIT License',
        'BSD 2-Clause "Simplified" License',
        'BSD 3-Clause "New" or "Revised" License',
        'Boost Software License 1.0',
        'Creative Commons Zero v1.0 Universal',
        'Eclipse Public License 2.0',
        'GNU Affero General Public License v3.0',
        'GNU General Public License v2.0',
        'GNU Lesser General Public License v2.1',
        'Mozilla Public License 2.0',
        'The Unlicense'
      ]
    },
    {
      type: 'confirm', 
      message: "Do you want to contribute to this project ...", 
      name: 'contributing'
    },
    {
      type: 'editor', 
      message: "Describe tests for this application:", 
      name: 'tests'
    },
    {
      type: 'confirm', 
      message: "Do you have any questions?", 
      name: 'questions'
    }
];

function getUserInputs() {
  inquirer.prompt(questions).then((response) => { 
              console.log(response);
              let markdown = generateMarkdown.generateMarkdown(response);
              fs.writeFile("./gen/README.md", markdown, function(err) {
                if(err) {
                  console.log("Error in writing to file: " + err);
                } else {
                  console.log("wrote to README.md successfully");
                }
              });
            });
}

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init(){
  /* Ask user questions, get answers */
  getUserInputs();

  /* generate the README using the responses */
}

// Function call to initialize app
init();
