//https://www.instagram.com/p/_hXNtRFZs1/

manyTriangles = 4;
triangleSide = 50;
offset = 80;

function setup() {

    var canvas = createCanvas(600, 600);
    canvas.parent('sketch');

    angleMode( DEGREES );

    background(240);
    stroke(43);

    strokeWeight(1);

    for ( var i = 0; i < manyTriangles; i++ ) {
        superTriangle( width / 2, height / 2, triangleSide + ( i * offset ) );
    }

}

function draw() {}

function superTriangle(x, y, side) {

    h = ( side * sqrt( 3 ) ) / 2;

    strokeWeight(10);
    noFill();

    push();
    translate(0, h / 3);
    triangle(x - (side / 2), y, x, y - h, x + (side / 2), y);
    pop();

}
