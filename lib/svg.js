
class LogoText  {
    constructor(text, color) {
        this.color = color;
        this.text = text;
    }

    render() {
        return `text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>` 
    }
}
class SVG {
    constructor(shape, LogoText){
        this,shape = shape;
        this.LogoText = LogoText;
    }
    render(){
        const svg = `svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape.render()}${this.LogoText.render()}</svg>
        return svg`
    }
     
}


module.exports = {  LogoText, SVG };