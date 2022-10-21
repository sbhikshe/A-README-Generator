const licenseList = [
['Apache License 2.0', 'https://opensource.org/licenses/Apache-2.0'],
['GNU General Public License v3.0','https://opensource.org/licenses/GPL-3.0'],
['MIT License', 'https://opensource.org/licenses/MIT'],
['BSD 2-Clause "Simplified" License', 'https://opensource.org/licenses/BSD-2-Clause'],
['BSD 3-Clause "New" or "Revised" License', 'https://opensource.org/licenses/BSD-3-Clause'],
['Boost Software License 1.0','https://opensource.org/licenses/BSL-1.0'],
//{'Creative Commons Zero v1.0 Universal',''],
['Eclipse Public License 2.0','https://opensource.org/licenses/EPL-2.0'],
['GNU Affero General Public License v3.0','https://opensource.org/licenses/AGPL-3.0'],
['GNU General Public License v2.0', 'https://opensource.org/licenses/GPL-2.0'],
['GNU Lesser General Public License v2.1','https://opensource.org/licenses/LGPL-2.1'],
['Mozilla Public License 2.0','https://opensource.org/licenses/MPL-2.0'],
['The Unlicense','https://opensource.org/licenses/unlicense']
];

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";
  if(license) {
    let arr = license.split(' ');
    let licenseType = arr[0];
    badge = "![License: " + licenseType + "](https://img.shields.io/badge/License-" + licenseType + "-yellow.svg)";
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseStr = "";
  if(license) {
    console.log("input license: "+ license);
    for (let i = 0; i < licenseList.length; i++) {
      let item = licenseList[i];
      console.log("item[0]: " + item[0]);
      if(item[0] == license) {
        console.log("item[1]: " + item[1]);
        licenseStr = "This application is covered under the [" + item[0] + "]("+ item[1] + ")";
        return licenseStr;
      }
    }
  }
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseStr = "";
  if(license) {
    //licenseStr += renderLicenseBadge(license);
    licenseStr += renderLicenseLink(license);
  }
  return licenseStr;
}

// TODO: Create a function to generate markdown for README
//title, Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
function generateMarkdown(data) {
  console.log("generating markdown ...");
    let markdown = "";
    // title
    markdown += `# ${data.title}\n`;

    // Badge here
    markdown += renderLicenseBadge(`${data.license}`);
    markdown += `\n`;

    // table of contents
    if(data.includeToC == true) {
      markdown += `## Table Of Contents\n`; // how to generate the links to the sections?
      markdown += `* [Description](#description)\n`;
      markdown += `* [Installation](#installation)\n`;
      markdown += `* [Usage](#usage)\n`;
      markdown += `* [License](#license)\n`;
      markdown += `* [Contributing](#contributing)\n`;
      markdown += `* [Tests](#tests)\n`;
      markdown += `* [Questions](#questions)\n`;
    }

    // Description
    markdown += `## Description\n${data.description}\n`;

    // Installation
    markdown += `## Installation\n${data.installation}\n`;

    // Usage
    markdown += `## Usage\n${data.usage}\n`;

    // License
    markdown += `## License\n`;
    let licenseInput = `${data.license}`;
    let licenseStr = renderLicenseSection(licenseInput);
    markdown += licenseStr;
    markdown += `\n`;

    // Contributing
    markdown += `## Contributing\n${data.contributing}\n`;

    // Tests
    markdown += `## Tests\n${data.tests}\n`;

    // Questions
    markdown += `## Questions\n`
    markdown += `Please visit https://github.com/${data.githubUsername} for more information.\n`;
    markdown += `If you have any questions, email the author at ${data.email}.\n`;

    return markdown;
    
}

//module.exports = generateMarkdown;

module.exports = {
  generateMarkdown: generateMarkdown
}

