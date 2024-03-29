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
            type: 'input',
            name: 'shape',
            message: 'Select a shape for the logo:'
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
    // Generate SVG content based on user input
    const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
        <rect width="100" height="100" fill="${color}" />
        <text x="50%" y="50%" text-anchor="middle" fill="white">${text}</text>
    </svg>`;

    // Write SVG content to a file
    fs.writeFileSync('logo.svg', svgContent);
    console.log('Logo generated and saved as logo.svg');
}

getUserInput();