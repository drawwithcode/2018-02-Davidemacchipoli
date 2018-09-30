var diametro = 420;
var inc = 1;


function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
    strokeWeight(2);

}

function draw() {
    background(0, 0, 0);
    noFill();
    noStroke();


    for (var i = 0; i < 180; i = i + 1.5) {
        stroke(175,60,60);
        line(width/2+diametro/2, height/2,
            width/2+diametro/2-(diametro*cos(i)*cos(i)),

            height/2-(diametro*cos(i)*sin(i)));

    }
}
