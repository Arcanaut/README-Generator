// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generatePage = require('./utils/generateMarkdown');



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
            type: 'confirm',
            name: 'confirmTest',
            message: 'If you wrote tests for your program, confirm them here, or skip',
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
            message: 'where can users reach you if they have questions?',
            validate: questionsInput => {
                if (questionsInput) {
                    return true;
                } else {
                    console.log('Please leave contact information.')
                    return false;
                }
            }
        },

        

    ])/*.then(projectData => {
        portfolioData.projects.push(projectData);
        if (projectData.confirmAddProject) {
            return promptProject(portfolioData);
        } else {
            return portfolioData;
        }
    });*/
};
// TODO: Create an array of questions for user input
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
