// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
  {type: 'confirm', message: "Do you want to add a Table of Contents?", name: 'includeToC'},
  {type: 'input', message: "Please enter a description for your project", name: 'description'},
  {type: 'confirm', message: "Do you have screenshots of your app that you'd like to add?", name: 'includeScreenshots'},
  {type: 'confirm', message: "Do you want to add Code Snippets?", name: 'includeCode'},
  {type: 'confirm', message: "Which license do you want to use?", name: 'license'}

];

function getUserInputs() {
  inquirer.prompt(questions).then((response) => console.log(response));
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
