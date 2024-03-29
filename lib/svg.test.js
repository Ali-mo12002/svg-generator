const SVG = require('./svg');
const { Circle, Square, LogoText } = require('./shapes');

describe('SVG Generation', () => {
    test('Generates SVG for Circle', () => {
        const circle = new Circle();
        circle.setColor('blue');
        const svg = SVG.render([circle]);
        expect(svg).toContain('<circle cx="50" cy="50" r="50" fill="blue" />');
    });

    test('Generates SVG for Square', () => {
        const square = new Square();
        square.setColor('red');
        const svg = SVG.render([square]);
        expect(svg).toContain('<rect x="0" y="0" width="100" height="100" fill="red" />');
    });

    test('Generates SVG for LogoText', () => {
        const logoText = new LogoText('SVG Logo');
        logoText.setColor('green');
        const svg = SVG.render([logoText]);
        expect(svg).toContain('<text x="50" y="50" fill="green" text-anchor="middle">SVG Logo</text>');
    });
});