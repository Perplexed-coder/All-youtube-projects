alert("Please subscribe...and help me to reach 150 subscribers😊🤗");
var k = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  //noLoop();  // Run once and stop
}

function draw() {
  background(300);
  fill('#0000FF');
  ellipse(width/2, height/2, mouseY, mouseY);
  fill(255);
  arc(width/2, height/2, mouseY, mouseY, PI + k, TWO_PI + (TWO_PI*(mouseX/windowWidth*3)) + k);
  k = k+0.01;
 
}

function pieChart(diameter, data) {
  var lastAngle = 0;
  for (var i = 0; i < data.length; i++) {
    var gray = map(i, 0, data.length, 0, 255);
    fill(gray);
    arc(width/2, height/2, diameter, diameter, lastAngle, lastAngle+radians(angles[i]));
    lastAngle += radians(angles[i]);
    println(lastAngle);
  }
}