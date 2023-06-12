class Shape {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }

    renderText() {
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }
};

class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }

    renderShape() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/>`;
    }
}

class Square extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }

    renderShape() {
        return `<rect x="90" y="50" width="120" height="120" fill="${this.shapeColor}"/>`;
    }
}

class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }

    renderShape() {
        return `<polygon points="150,50 60,150 240,150" fill="${this.shapeColor}"/>`;
    }
}

module.exports = {Circle, Square, Triangle};