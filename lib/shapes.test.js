const {Circle, Square, Triangle} = require('./shapes');

describe('Circle', () => {
    describe('renderText() method', () => {
        it('should return a string for the corresponding SVG file with the text and given color', () => {
            const shape = new Circle('SVG', 'white', 'black');
            expect(shape.renderText()).toEqual('<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>');
        });
    });

    describe('renderShape() method', () => {
        it('should return a string for the corresponding SVG file with the given shape color', () => {
            const shape = new Circle('SVG', 'white', 'black');
            expect(shape.renderShape()).toEqual('<circle cx="150" cy="100" r="80" fill="black"/>');
        });
    });
});

describe('Square', () => {
    describe('renderShape() method', () => {
        it('should return a string for the corresponding SVG file with the given shape color', () => {
            const shape = new Square('SVG', 'white', 'red');
            expect(shape.renderShape()).toEqual('<rect x="90" y="50" width="120" height="120" fill="red"/>');
        });
    });
});

describe('Triangle', () => {
    describe('renderShape() method', () => {
        it('should return a string for the corresponding SVG file with the given shape color', () => {
            const shape = new Triangle('SVG', 'white', 'green');
            expect(shape.renderShape()).toEqual('<polygon points="150,50 60,150 240,150" fill="green"/>');
        });
    });
});