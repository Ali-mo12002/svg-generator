//module.exports = Shapes;


function Shapes(options) {
  if (!(this instanceof Shapes)) {
    return new Shapes();
  }
}

var addStyles = function (shape, styles) {

  if (styles.color) {
    shape.style.backgroundColor = styles.color;
  }
  if (styles.border) {
    shape.style.borderColor = styles.border.color;
    shape.style.borderWidth = styles.border.width;
    shape.style.borderStyle = styles.border.style;
  }

  return shape;
};

Shapes.prototype.circle = function (options) {
  var circle = document.createElement('div');
  var styles = {};
  styles.color = options.color;
  styles.border = options.border;

  if (styles.border) {
    styles.border.width = options.border.width;
    styles.border.color = options.border.color;
    styles.border.style =  options.border.style;
  }
  circle.style.height = options.size;
  circle.style.width = options.size;
  circle.style.borderRadius = '50%';
  circle = addStyles(circle, styles);
  return circle;
};

Shapes.prototype.square = function (options) {
  var square = document.createElement('div');
  var styles = {};
  styles.color = options.color;
  styles.border = options.border;

  if (styles.border) {
    styles.border.width = options.border.width;
    styles.border.color = options.border.color;
    styles.border.style = options.border.style;
  }
  square.style.height = options.size;
  square.style.width = options.size;
  square = addStyles(square, styles);
  return square;
};

Shapes.prototype.triangle = function (options) {
  var triangle = document.createElement('div');
  var styles = {};
  styles.border = {};
  styles.border.width = '0 ' + options.size + ' ' + options.size + ' '+ options.size + ' ';
  styles.border.color = 'transparent transparent ' + options.color + ' transparent';
  styles.border.style = 'solid';

  triangle.style.height = 0;
  triangle.style.width = 0;
  triangle = addStyles(triangle, styles);
  return triangle;
};
