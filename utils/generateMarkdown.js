/* A list of licenses */
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

// This function returns a license badge based on which license is passed in
// If there is no license, returns an empty string
function renderLicenseBadge(license) {
  let badge = "";
  if(license) {
    let arr = license.split(' ');
    let licenseType = arr[0];
    switch(licenseType) {
      case 'MIT': badge = "![License: " + licenseType + "](https://img.shields.io/badge/License-" + licenseType + "-green.svg)";
                    break;
      case 'BSD':
      case 'Apache': badge = "![License: " + licenseType + "](https://img.shields.io/badge/License-" + licenseType + "-blue.svg)";
                    break;
      case 'GNU': badge = "![License: " + licenseType + "](https://img.shields.io/badge/License-" + licenseType + "-yellow.svg)";
                    break;
      default: badge = "![License: " + licenseType + "](https://img.shields.io/badge/License-" + licenseType + "-orange.svg)";
    }
    badge += `\n`;
  }
  return badge;
}

// This function returns the license link
// If there is no license, returns an empty string
function renderLicenseLink(license) {
  let link = "";
  if(license) {
    for (let i = 0; i < licenseList.length; i++) {
      let item = licenseList[i];
      if(item[0] == license) {
        link = "("+ item[1] + ")";
        return link;
      }
    }
  }
  return link;
}

// This function returns the license section of README.
// If there is no license, returns an empty string
function renderLicenseSection(license) {
  let licenseStr = "";
  if(license) {
    licenseStr += "This application is covered under the [" + license + "]";
    licenseStr += renderLicenseLink(license);
    licenseStr += ".\n";
  }
  return licenseStr;
}

/* This function generates markdown for the README
   It uses the user's responses to the questions that we posed using
   the inquirer to populate the different sections in the README.
   Title, License badge, Description, Table of Contents, Installation, 
   Usage, License, Contributing, Tests, and Questions */
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
      markdown += `## Table Of Contents\n`;
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
    markdown += `If you have any questions, email the author at <${data.email}>.\n`;

    return markdown;
    
}

module.exports = {
  generateMarkdown: generateMarkdown
}

