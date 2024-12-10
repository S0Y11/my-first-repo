colorX = random(255);


function setup() {
  createCanvas(400, 400);
}

function draw() {
  
  ellipse(100,200,100,100);
  stroke(random(255),random(255));
  strokeWeight(random(25));


  ellipse(100,300,100,100);
  stroke(random(255),random(255));
  strokeWeight(random(25));
  
}

function mousePressed(){
    background(random(255),random(255),random(255));
}
