var canvas;
var canvasWidth=500;
var canvasHeight=400;
var button;
var slider;
var spread;

function setup(){
	canvas=createCanvas(canvasWidth,canvasHeight);
	background(50,205,50);
	canvas.parent("canvas-area");
	canvas.mousePressed(drawSplatter);
	button = select("#clear-button");
	button.mousePressed(setup);
	slider = select("#slider");
	slider.input(updateSpread);
	updateSpread();
}

function draw(){
}

function drawSplatter(){
	noStroke();
	var circleNum = random(10,15);
	fill(random(0,255),random(0,255),random(0,255));
	for(i=0;i<circleNum;i++){
		var radiusDif = random(5,15);
		ellipse(random(mouseX-spread,mouseX+spread),random(mouseY-spread,mouseY+spread),radiusDif,radiusDif);
	}
}

function updateSpread(){
	spread=slider.value();
}