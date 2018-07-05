var steps = 6;
var minRadius = 110;
var maxRadius = 310;

function setup() {

    var canvas = createCanvas(600, 600);
    canvas.parent('sketch');
    frameRate(1);
    smooth(); 

    background(239);
    superEllipse( steps, minRadius, maxRadius );

}

function draw() {
}

function superEllipse( steps, min, max ){

    var offset = (max - min) / steps;

    noFill();
    angleMode(DEGREES);
    translate(width/2, height/2);

    for( var i = 0; i <= steps; i++ ){

        strokeWeight(1.2);

        ellipse(0, 0, min + (offset * i), min + (offset * i) );

        strokeWeight(3.5);

        rotate( map( random(0,100), 0, 100, 0, 360 ) );

        arc(0,0, min + (offset * i), min + (offset * i), 0, random( 50,220 ) );

    }

}

function keyTyped() {

  if (key === 's') {
    save('experiment-001.jpg');
  }

}
