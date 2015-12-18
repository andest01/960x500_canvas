// GLOBAL CONSTANTS
'use strict';
var WIDTH = 960;
var HEIGHT = 500;
var CIRCLESIZE = 10;
var CANVAS_ID = 'js-canvas';
var context = null;
// call this function only once. it makes a magical drawing context.
// don't ask me what that is, but you'll need `context` to draw stuff.
function initializeCanvas() {
  var canvas = document.getElementById(CANVAS_ID);
  context = canvas.getContext('2d');
  return context;
}

// call this function to draw a single frame to your canvas.
function draw() {
  context.fillRect(WIDTH/2,HEIGHT/2,WIDTH/2,HEIGHT/2);
}

// I'm not using jQuery, so you won't 
// see a $(document).ready(...) here.
// INSIDE THIS IS WHERE EXECUTION ACTUALLY STARTS TO HAPPEN!
document.addEventListener('DOMContentLoaded', function() {
  // initialize our canvas.
  // start your engines.
  initializeCanvas();

  // hit the gas.
  // draw a farme.
  draw();
});
