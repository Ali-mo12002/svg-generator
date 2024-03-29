const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');
const { Circle, Triangle, Square } = require('./shapes');
const questions = require('./questions');
const { Logo, SVG } = require('./svg');

class CLI {
    constructor() {
    }

    run() {
        return inquirer
            .prompt(questions)
            .then((responses) => {
                const logo = this.generateLogo(responses);
                const markup = SVG.render(logo);
                return writeFile("logo.svg", markup);
            })
            .then(() => {
                console.log("SVG logo created successfully!");
            })
            .catch((error) => {
                console.error("Error creating SVG logo:", error);
            });
    }

    generateLogo(responses) {
        let shape;
        switch (responses.shape) {
            case 'Circle':
                shape = new Circle();
                break;
            case 'Triangle':
                shape = new Triangle();
                break;
            case 'Square':
                shape = new Square();
                break;
            default:
                throw new Error("Invalid shape selection");
        }

        shape.setColor(responses.color);
        const logo = new Logo(shape, responses.text);
        return logo;
    }
}



module.exports = CLI;