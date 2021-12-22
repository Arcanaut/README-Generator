const fs = require('fs');
 inquirer = require('inquirer');

function generateMarkdown(questions) {
// ![Github ,license](`http://img.shields.io/badge/license-${data.license}-green.svg`)
const {title, about, features, install, usage, credits, test, userName, email, license,} = questions [0];
// TODO: Create a function to generate markdown for README. 

//may need to remove ToC

  return ` 
  ${title}
  
  ## Table of Contents
  [Description](#Description)
  [Installation](#Installation)
  [Usage](#Usage)
  [Credits](#Credits)
  [Tests](#tests)
  [Questions](#Questions)
  [License](#License)


  ## Description
  ${about}

  ## Features
  ${features}

  ## Installation 
  ${install}

  ## Usage
  ${usage}

  ## Tests
  ${test}

## Credits
  ${credits}
  ## Questions
  Project created by ${userName}. Have any questions, compliments, or concerns? Reach out to me at my email: <${email}>! Want to see my other projects? 
  Head on over to my [github](https://www.github.com/${userName}) to find more.

  ## License
  ${license} 
  [Github ,license](http://img.shields.io/badge/license-${license}-green.svg)
  
`;
}
//!
module.exports = generateMarkdown;
