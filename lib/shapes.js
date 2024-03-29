class Shape {
    constructor(color = '#000000') {
        this.color = color;
    }

    setColor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    constructor(color = '#000000') {
        super(color);
    }

    render() {
        return `<circle cx="50" cy="50" r="50" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    constructor(color = '#000000') {
        super(color);
    }

    render() {
        return `<rect x="0" y="0" width="100" height="100" fill="${this.color}" />`;
    }
}

class LogoText extends Shape {
    constructor(text, color = '#000000') {
        super(color);
        this.text = text;
    }

    render() {
        return `<text x="50" y="50" fill="${this.color}" text-anchor="middle">${this.text}</text>`;
    }
}

module.exports = { Shape, Circle, Square, LogoText };