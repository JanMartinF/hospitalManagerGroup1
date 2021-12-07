let canvas = document.getElementById('canvasID');
let ctx = canvas.getContext('2d');

//Screen1
// fillRect() <- zeichnet ein Rechteck
// requires: x-Achse, y-Achse, Breite (width), Höhe (height)
ctx.fillStyle = "grey";
ctx.fillRect(175, 90, 78, 75);

ctx.fillStyle = "red";
ctx.fillRect(140, 78, 50, 50);

ctx.fillStyle = "yellow";
ctx.fillRect(220, 200, 60, 50);

ctx.fillStyle = "violet";
ctx.fillRect(60, 160, 40, 50);

ctx.fillStyle = "blue";
ctx.fillRect(40, 90, 80, 50);

ctx.fillStyle = "green";
ctx.fillRect(120, 170, 90, 75);

ctx.fillStyle = "orange";
ctx.fillRect(40, 250, 90, 75);

ctx.fillStyle = "aqua";
ctx.fillRect(200, 5, 90, 75);

ctx.fillStyle = "olive";
ctx.fillRect(140, 270, 100, 50);

console.log("hallo bla")


