const inquirer = require('inquirer');
const fs = require('fs');

async function getUserInput() {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'color',
            message: 'Select a color for the logo:'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Select a shape for the logo:',
            choices: ['circle', 'triangle', 'square']
        },
        {
            type: 'input',
            name: 'text',
            message: 'Enter text for the logo:'
        }
    ]);

    generateSVG(answers.color, answers.shape, answers.text);
}

function generateSVG(color, shape, text) {
    let shapeContent;

    switch (shape) {
        case 'circle':
            shapeContent = `<circle cx="50" cy="50" r="40" fill="${color}" />`;
            break;
        case 'triangle':
            shapeContent = `<polygon points="50,10 10,90 90,90" fill="${color}" />`;
            break;
        case 'square':
            shapeContent = `<rect x="10" y="10" width="80" height="80" fill="${color}" />`;
            break;
        default:
            console.log('Invalid shape input. Please choose circle, triangle, or square.');
            return;
    }

    const svgContent = `
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
            ${shapeContent}
            <text x="50%" y="50%" text-anchor="middle" fill="white">${text}</text>
        </svg>`;

    fs.writeFileSync('logo.svg', svgContent);
    console.log('Logo generated and saved as logo.svg');
}

getUserInput();