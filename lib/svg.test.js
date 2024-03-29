const { Square, Triangle, Circle } = require('./shapes');

test('Generates SVG for Square', () => {
    const square = new Square('blue'); // Instantiate Square with the color argument
    const expectedSvg = `<rect x=\"90\" y=\"40\" width=\"120\" height=\"120\" fill=\"blue\" />`;
    const actualSvg = square.render();
    expect(actualSvg).toEqual(expectedSvg);
});
test('Generates SVG for Triangle', () => {
    const triangle = new Triangle('red');
    const expectedSvg = `<polygon points="150, 18 244, 182 56, 182\" fill=\"red\" />`;
    const actualSvg = triangle.render();
    expect(actualSvg).toEqual(expectedSvg);
});

test('Generates SVG for Circle', () => {
    const circle = new Circle('green');
    const expectedSvg = `<circle cx="150" cy="150" r="80" fill="green" /> `;
    const actualSvg = circle.render();
    expect(actualSvg).toEqual(expectedSvg);
});
