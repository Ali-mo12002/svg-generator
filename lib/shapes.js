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
        const svg = `<circle cx="150" cy="150" r="80" fill="${this.color}" /> `;
        return svg 
    }
}

class Square extends Shape {
    constructor(color = '#000000') {
        super(color);
    }

    render() {
        const svg = `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`;
        return svg
    }
}
class Triangle extends Shape {
    constructor(color = '#000000') {
        super(color);
    }
    render() {
        const svg = `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
        return svg
    }
}

class LogoText extends Shape {
    constructor(text, color = '#000000') {
        super(color);
        this.text = text;
    }

    render() {
        const svg = `<text x="50" y="50" fill="${this.color}" text-anchor="middle">${this.text}</text>`;
    }
}

module.exports = { Shape, Circle, Square, Triangle, LogoText };