const fs = require('fs');
const inquirer = require('inquirer');
function generateMarkdown(data) {
// ![Github ,license](`http://img.shields.io/badge/license-${data.license}-green.svg`)

// TODO: Create a function to generate markdown for README

  return `# ${data.title}

  ##Table of Contents

  ## Description
  ${data.about}

  ## Installation 
  ${data.install}

  ##Usage
  ${data.usage}

  ##Credits
  ${data.credits}

  ##Test
  ${data.test}

  ##Questions
  ${data.questions}

  ##License
  ${data.license}
`;
}

module.exports = generateMarkdown;
