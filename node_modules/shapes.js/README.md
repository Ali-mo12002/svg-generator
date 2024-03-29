# shapes.js

  ![logo](https://raw.githubusercontent.com/maximobelen/assets/master/images/shape.js/shapejs.png)  


[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

A creator for div with different shapes!

```js
var Shapes = require('shapes.js');

var shapes = new Shapes();

//Creating a Triangle
var triangle = shapes.triangle({color: '#000333', size:'100px'});  
document.body.appendChild(triangle)  
  
//Creating a Square  
var square = shapes.square({color: '#0000ff', size:'100px', border:{width:'100px', color:'#ff0000', style: 'solid'}});  
document.body.appendChild(square)  

//Creating a Circle...
var circle = shapes.circle({color: '#000333', size:'100px', border:{width:'100px', color:'#ff0000', style: 'solid'}});
document.body.appendChild(circle)  
  
  
//NOTE: All options are optional, except for the size.
```
  
## Future stuff...
I´m going to add rotation for all shapes!  
... and maybe came with new shapes :)  

## Usage

[![NPM](https://nodei.co/npm/shapes.js.png)](https://www.npmjs.com/package/shapes.js)
