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
//title, Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
function generateMarkdown(data) {
  console.log("generating markdown ...");
    let markdown = "";
    // title
    markdown += `# ${data.title}\n`;

    // table of contents
    if(data.includeToC == true) {
      markdown += `## Table Of Contents\n`; // how to generate the links to the sections?
    }

    // Description
    markdown += `## Description\n${data.description}\n`;

    // Installation
    markdown += `## Installation\n${data.installation}\n`;

    // Usage
    markdown += `## Usage\n${data.usage}\n`;

    // License
    markdown += `## License\n${data.license}\n`;

    // Contributing
    markdown += `## Contributing\n${data.contributing}\n`;

    // Tests
    markdown += `## Tests\n${data.tests}\n`;

    // Questions
    markdown += `## Questions\n${data.questions}\n`;

    return markdown;
    
}

//module.exports = generateMarkdown;

module.exports = {
  generateMarkdown: generateMarkdown
}

