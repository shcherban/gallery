let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
var window_height = window.innerHeight;
var window_width = window.innerWidth;

canvas.width = window_width;
canvas.height = window_height;

canvas.style.background ="#ffa";

context.fillRect(200, 200, 100, 100);

context.arc(100,100,100,0, Math.PI * 1.5, false);

context.stroke();