const { Circle, Square, Triangle } = require('./shapes');
const fs = require('fs');

function generateLogo(text, textColor, shape, shapeColor) {
    let logo;
    switch (shape) {
        case 'circle':
            logo = new Circle(text, textColor, shapeColor);
            break;
        case 'square':
            logo = new Square(text, textColor, shapeColor);
            break;
        default:
            logo = new Triangle(text, textColor, shapeColor);
    }

    const content = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${logo.renderShape()}
    ${logo.renderText()}
    </svg>`;

    const fileName = `./logo.svg`
    fs.writeFile(fileName, content, (err) =>
        err ? console.log(err) : console.log('Generated logo.svg'))
}

module.exports = { generateLogo }