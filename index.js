const { askQuestions } = require('./lib/prompt');

async function init() {
    const data = await askQuestions();
    console.log(data)
}

init()