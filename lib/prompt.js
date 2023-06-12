const { validate } = require('@babel/types');
const { prompt } = require('inquirer');
const validateColor = require('validate-color').default;

function isValidText(input) {
    if (input.trim() === '') {
        return 'Can not be empty text!';
    } else if (input.length > 3) {
        return 'Can not be more than 3 characters!';
    } else {
        return true;
    }
}

function isColor(input) {
    if (!validateColor(input)) {
        return 'It is not a color!';
    } else {
        return true;
    }
}

function isValidColor(input, answers) {
    if (!validateColor(input)) {
        return 'It is not a color!';
    } else if (answers.textColor === input) {
        return 'Please choice a different color!';
    } else {
        return true;
    }
}


const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter text for the logo (Must not be more than 3 characters.): ',
        validate: isValidText
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter a text color: ',
        validate: isColor
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Select a shape for the logo: ',
        choices: ['circle', 'square', 'triangle']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a shape color: ',
        validate: isValidColor
    }
];

async function askQuestions() {
    const answer = await prompt(questions);
    return answer;
}

module.exports = { askQuestions };