var canvas, ctx;
var interval;
var width, height;
var x, y;

function setup() {
  width = 720;
  height = 180;
  canvas = document.getElementById("scrawl");
  ctx = canvas.getContext("2d");
  x = 0;
  y = 10;
  interval = setInterval(draw, 20);
}

function draw() {
  ctx.fillStyle = "rgba(255, 255, 255, 0.07)";
  ctx.fillRect(0, 0, width, height);

  x += 5;
  if (x > width) { x = 0; }
  ctx.fillStyle = "rgb(108, 71, 135)";
  ctx.fillRect(x, y, 60, 60);
}
