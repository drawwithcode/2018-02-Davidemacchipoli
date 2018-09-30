


function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
    strokeWeight(2);
    frameRate(30);


}


var diametro = 420;




function draw() {
    background(0, 0, 0);
    noFill();


//prima
    if (mouseX >= width/2) {
      for (var i = 0; i <= 180; i = i + 1.5) {
        stroke(mouseX*0.15,mouseX*0.15,mouseX*0.15);
          line(width/2+diametro/2, height/2,
              width/2+diametro/2-(diametro*cos(i)*cos(i)),
              height/2-(diametro*cos(i)*sin(i)));
      };

    } else {


    for (var i = 0; i <= 180; i = i + 3) {
      ;
      stroke(40+mouseX*0.15,40+mouseX*0.15,40+mouseX*0.15);
        line(width/2+diametro/2, height/2,
            width/2+diametro/2-(diametro*cos(i)*cos(i)),
            height/2-(diametro*cos(i)*sin(i)));
          }
    };


    if (mouseIsPressed && mouseX <= width/2) {
      for (var i = 0; i <= 180; i = i + 2) {
        stroke(mouseX*0.15,14,155);
          line(width/2+diametro/2, height/2,
              width/2+diametro/2-(diametro*cos(i)*cos(i)),
              height/2-(diametro*cos(i)*sin(i)));
      };

    }
    else if (mouseIsPressed && mouseX >= width/2)
    {


    for (var i = 0; i <= 180; i = i + 5) {
      stroke(0.37*mouseX,145,155);
        line(width/2+diametro/2, height/2,
            width/2+diametro/2-(diametro*cos(i)*cos(i)),
            height/2-(diametro*cos(i)*sin(i)));
          }
    };

strokeWeight(1);
    textSize(26);
    text('Go Right to Switch On the light', width/2 -180  , height/2 -280 );
        textSize(30);
      text('More fun pressing mouse', width/2 - 180  , height/2 +280 );
    fill(0, 102, 153);
strokeWeight(2);

}
