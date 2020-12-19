function setup() {

  createCanvas(displayWidth, displayHeight);
  background(0);
  stroke(250,250,000);
  strokeWeight(20);
  
  
  


 
}

function touchMoved() {
  line(mouseX, mouseY, pmouseX, pmouseY);
  return false;
}