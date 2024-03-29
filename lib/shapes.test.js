const { Circle, Square, LogoText } = require('./shapes');

describe('Shape Classes', () => {
    test('Circle should render correctly', () => {
        const circle = new Circle();
        circle.setColor('blue');
        expect(circle.render()).toEqual('<circle cx="50" cy="50" r="50" fill="blue" />');
    });

    test('Square should render correctly', () => {
        const square = new Square();
        square.setColor('red');
        expect(square.render()).toEqual('<rect x="0" y="0" width="100" height="100" fill="red" />');
    });

    test('LogoText should render correctly', () => {
        const logoText = new LogoText('SVG Logo');
        logoText.setColor('green');
        expect(logoText.render()).toEqual('<text x="50" y="50" fill="green" text-anchor="middle">SVG Logo</text>');
    });
});