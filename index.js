const { askQuestions } = require('./lib/prompt');
const { generateLogo } = require('./lib/generateLogo');

async function init() {
    const data = await askQuestions();
    const { text, textColor, shape, shapeColor } = data;
    generateLogo(text, textColor, shape, shapeColor);
}
init()