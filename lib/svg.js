class Shape {
    constructor(color = '#000000') {
        this.color = color;
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        throw new Error("render() method must be implemented in the subclass");
    }
}

class LogoText extends Shape {
    constructor(text, color = '#000000') {
        super(color);
        this.text = text;
    }

    render() {
    const svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape.render()}${this.LogoText.render()}</svg>`;
    return svg
    }
}
class SVG {
    static render(shapes) {
        const svgOpen = '<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">';
        const svgClose = '</svg>';
        let svgContent = '';

        shapes.forEach((shape) => {
            svgContent += shape.render();
        });

        return svgOpen + svgContent + svgClose;
    }
}


module.exports = { Shape, LogoText, SVG };