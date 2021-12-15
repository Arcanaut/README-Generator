// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generatePage = require('./utils/generateMarkdown');

const promptUser = () => {
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
            name: 'confirmTable',
            message: 'Would you like to enter a table of content section?',
            default: true
        },
        {
            type: 'checkbox',
            name: 'table',
            message: 'what sections would you like to link to?',
            choices: ['Description', 'Features', 'Installation', 'Usage', 'Contribution', 'Test', 'License', 'Badges', ],
            when: ({
                confirmTable
            }) => {
                if (confirmTable) {
                    return true;
                } else {
                    return false;
                }
            }
        },

        {
            type: 'confirm',
            name: 'confirmFeatures',
            message: 'Would you like to enter an explaintion of the features? (Recommended)',
            default: true
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
        }
    ]);
};
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();