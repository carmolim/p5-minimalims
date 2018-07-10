// https://www.instagram.com/p/Bk0OnSVl4Ca

let manySpikes = 115;
let r = 110;
const dark = 25;

function setup() {
    
    var canvas = createCanvas(600, 600);
    canvas.parent('sketch');

    angleMode(DEGREES);

    background(dark);
    
    frameRate(1);
}

function draw() {

    background(dark);
    translate(width/2, height/2);

    for(let i = 0; i < manySpikes; i++)
    {
        stroke(250);
        strokeWeight(1);
        push();
        rotate( map( i,0, manySpikes, 0, 360 ) );
        line( 0, 0, random(.0, 1)*120, random(.0, 1)*180 );
        pop();
    }  

    fill(dark);
    noStroke();
    ellipse(0,0,r+10,r+10);
    stroke(250);
    strokeWeight(5);
    ellipse(0,0,r,r);

}
