const { Circle, Square, Triangle } = require('./shapes');

describe("Circle", () => {
    test("should render green circle", () => {
        const expectedSvg = `<circle cx="150" cy="150" r="80" fill="green" /> `;
        const circle = new Circle();
        circle.setColor('green');
        const actualSvg = circle.render();
        expect(actualSvg).toEqual(expectedSvg);
    });

    test("should accept fill color", () => {
        const expectedSvg = `<circle cx="150" cy="150" r="80" fill="blue" /> `;
        const circle = new Circle();
        circle.setColor('blue');
        const actualSvg = circle.render();
        expect(actualSvg).toEqual(expectedSvg);
    });
});

describe("triangle", () => {
    test("should render green triangle", () => {
        const expectedSvg = `<polygon points="150, 18 244, 182 56, 182" fill="bisque" />`;
        const triangle = new Triangle();
        triangle.setColor('bisque');
        const actualSvg = triangle.render();
        expect(actualSvg).toEqual(expectedSvg);
    });

    test("should accept fill color", () => {
        const expectedSvg = `<polygon points="150, 18 244, 182 56, 182" fill="purple" />`;
        const triangle = new Triangle();
        triangle.setColor('purple');
        const actualSvg = triangle.render();
        expect(actualSvg).toEqual(expectedSvg);
    });
});

describe("Square", () => {
    test("should render green square", () => {
        const expectedSvg = `<rect x="90" y="40" width="120" height="120" fill="dodgerblue" />`;
        const square = new Square();
        square.setColor('dodgerblue');
        const actualSvg = square.render();
        expect(actualSvg).toEqual(expectedSvg);
    });

    test("should accept fill color", () => {
        const expectedSvg = `<rect x="90" y="40" width="120" height="120" fill="red" />`;
        const square = new Square();
        square.setColor('red');
        const actualSvg = square.render();
        expect(actualSvg).toEqual(expectedSvg);
    });
});