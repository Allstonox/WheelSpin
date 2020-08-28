function spinButton() {
this.x = 400;
this.y = 200;
this.r = 50;

this.show = function() {
  if(mouseIsPressed && dist(mouseX, mouseY, button.x, button.y) < button.r / 2){
  fill(255, 0, 0); 
  ellipse(this.x, this.y, this.r / 1.25, this.r / 1.25);
  textAlign(CENTER, CENTER);
  textSize(15 / 1.25);
  fill(0);
  text("SPIN!", this.x, this.y); 
  }
  
  else{
  fill(255, 0, 0); 
  ellipse(this.x, this.y, this.r, this.r);
  textAlign(CENTER, CENTER);
  textSize(15);
  fill(0);
  text("SPIN!", this.x, this.y);
  }
}
  
}
