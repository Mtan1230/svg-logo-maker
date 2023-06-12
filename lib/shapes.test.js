const {Circle, Square, Triangle} = require('./shapes');

describe('Circle', () => {
    describe('renderText() method', () => {
        it('should return a string for the corresponding SVG file with the text and given color', () => {
            const text = 'SVG';
            const textColor = 'white';
            const shape = new Circle(text, textColor, 'black');
            expect(shape.renderText()).toEqual('<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>');
        });
    });

    describe('renderShape() method', () => {
        it('should return a string for the corresponding SVG file with the given shape color', () => {
            const shapeColor = '#00000';
            const shape = new Circle('SVG', 'white', shapeColor);
            expect(shape.renderShape()).toEqual('<circle cx="150" cy="100" r="80" fill="#00000"/>');
        });
    });
});

describe('Square', () => {
    describe('renderShape() method', () => {
        it('should return a string for the corresponding SVG file with the given shape color', () => {
            const shapeColor = 'red';
            const shape = new Square('SVG', 'white', shapeColor);
            expect(shape.renderShape()).toEqual('<rect x="90" y="50" width="120" height="120" fill="red"/>');
        });
    });
});

describe('Triangle', () => {
    describe('renderShape() method', () => {
        it('should return a string for the corresponding SVG file with the given shape color', () => {
            const shapeColor = 'green';
            const shape = new Triangle('SVG', 'white', shapeColor);
            expect(shape.renderShape()).toEqual('<polygon points="150,50 60,150 240,150" fill="green"/>');
        });
    });
});