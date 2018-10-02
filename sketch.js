


function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
    strokeWeight(2);
    frameRate(20);


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

push();
    if (mouseIsPressed && mouseX <= width/2) {
      for (var i = 0; i <= 180; i = i + 2) {
        stroke(mouseX*0.15,14,155);
        rotate(frameCount/160*-1/3*cos(i)*sin(i));
          line(width/2+diametro/2, height/2,
              width/2+diametro/2-(diametro*cos(i)*cos(i)),
              height/2-(diametro*cos(i)*sin(i)));
      };
pop();
    }
    else if (mouseIsPressed && mouseX >= width/2)
    {


push();
    for (var i = 0; i <= 180; i = i + 5) {
      //stroke(0.37*mouseX,145,155);
      stroke(lerpColor(color('#ea0043'), color('#0fefca'), frameCount/520));
             rotate(frameCount/80*cos(i)*sin(i));
            line(width/2+diametro/2, height/2,
            width/2+diametro/2-(diametro*cos(i)*cos(i)),
            height/2-(diametro*cos(i)*sin(i)));
          }
    };
pop();


strokeWeight(1);
    textSize(26);
    text('Go Right to Switch On the light', width/2 -180  , height/2 -280 );
        textSize(30);
      text('More fun pressing mouse', width/2 - 180  , height/2 +280 );
    fill(0, 102, 153);
strokeWeight(2);

}
