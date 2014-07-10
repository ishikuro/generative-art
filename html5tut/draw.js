// depending on perlin-noise-simplex.js

var canvas, ctx;
var interval;
var width, height;

var perlin;
var xanchor, yanchor, midx, midy, xposnoise, yposnoise;
var xstart, ystart;
var squaresize;

function setup() {
  width = 720;
  height = 180;
  canvas = document.getElementById("scrawl");
  ctx = canvas.getContext("2d");

  xanchor = 550;
  yanchor = 50;
  perlin = new SimplexNoise();
  xstart = Math.random() * 10.0;
  ystart = Math.random() * 10.0;
  xposnoise = Math.random() * 10.0;
  yposnoise = Math.random() * 10.0;
  squaresize = 22;
  perlin = new SimplexNoise();

  interval = setInterval(draw, 20);
}

function draw() {
  ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
  ctx.fillRect(0, 0, width, height);

  ctx.strokeStyle = "rgba(0, 0, 0, 0.15)";
  ctx.fillStyle = "rgba(255, 255, 255, 0.6)";

  xposnoise += 0.02;
  yposnoise += 0.01;
  midx = xanchor + Math.floor(perlin.noise(xposnoise, 0) * 50);
  midy = yanchor + Math.floor(perlin.noise(yposnoise, 0) * 50);
  xstart += 0.02;
  ystart += 0.02;

  var ynoise = ystart;
  for (var y = -squaresize; y < squaresize; y++) {
    ynoise += 0.02;
    var xnoise = xstart;
    for (var x = -squaresize; x < squaresize; x++) {
      xnoise += 0.02;
      var nFactor = Math.abs(perlin.noise(xnoise, ynoise));
      drawPoint(x, y, nFactor);
    }
  }
}

function drawPoint(ex, why, noiseFactor) {
  var x = midx + (ex * noiseFactor * 13);
  var y = midy + (why * noiseFactor * 9);
  var edgeSize = noiseFactor * 26;

  ctx.beginPath();
  ctx.arc(x, y, edgeSize, 0, Math.PI*2, true);
  // args: x, y, rad, start angel, end angle, anti/clockwise
  ctx.fill();
  ctx.stroke();
}
