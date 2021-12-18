// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')



// TODO: Create an array of questions for user input

const promptUserQuestions = () => {
    return inquirer.prompt([{
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter a title for your project (required)')
                    return false;
                }
            }

        },
        {
            type: 'input',
            name: 'about',
            message: 'What is your project about? (required)',
            validate: aboutInput => {
                if (aboutInput) {
                    return true;
                } else {
                    console.log('Please enter an about section for your project')
                    return false;
                }
            }

        },

        {
            type: 'confirm',
            name: 'confirmFeatures',
            message: 'Would you like to enter an explanation of the features? (Recommended)',
            default: false
        },

        {
            type: 'input',
            name: 'features',
            message: 'Provide some information about the project features:',
            when: ({
                confirmFeatures
            }) => {
                if (confirmFeatures) {
                    return true;
                } else {
                    return false;
                }
            }
        },


        {
            type: 'input',
            name: 'install',
            message: 'What does the program require for installation? (required)',
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console.log('Please give installation instructions.')
                    return false;
                }
            }

        },

        {
            type: 'input',
            name: 'usage',
            message: 'How does the user operate this program? (required)',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please explain how to use this program.')
                    return false;
                }
            }

        },

        {
            type: 'input',
            name: 'credits',
            message: 'Who contributed to this project? (required)',
            validate: creditsInput => {
                if (creditsInput) {
                    return true;
                } else {
                    console.log('Please list who contributed to this project')
                    return false;
                }
            }

        },


        {
            type: 'confirm',
            name: 'confirmTest',
            message: 'If you wrote tests for your program, confirm that you did here, or skip',
            default: false
        },

        {
            type: 'input',
            name: 'test',
            message: 'Provide some information about the tests you ran.',
            when: ({
                confirmTest
            }) => {
                if (confirmTest) {
                    return true;
                } else {
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'questions',
            message: 'what is your github user name?',
            validate: questionsInput => {
                if (questionsInput) {
                    return true;
                } else {
                    console.log('Please leave contact information.')
                    return false;
                }
            },
        
        },

        {
            type: 'checkbox',
            name: 'table',
            message: 'Which sections do you want to link to? (only select sections generated)',
            choices: ['Description', 'Installation', 'Usage', 'Credits', 'Tests', 'Questions', 'License']
        },

        {
            type: 'list',
            message: 'Which license are you using?',
            name: 'license',
            choices: ['MIT', 'Apache', 'GNU', 'Mozilla Public 2.0', 'Boost Software 1.0', 'The Unlicense', 'ISC', 'No License']
        },
        {
            type: 'list',
            name: 'SubCategory',
            message: 'if there is a sub-category of licenses it will appear when you choose it',
            when: (answers) => {
                if (answers.license === 'GNU') {
                    return true;
                }
                return false;
            },

            choices: (answers) => {
                if (answers.license === 'GNU') {
                    return ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3']
                }

            }
        },
    ])
    .then(finalAnswers => {
        console.log(finalAnswers)
    } )
};
promptUserQuestions();
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
    });
};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();