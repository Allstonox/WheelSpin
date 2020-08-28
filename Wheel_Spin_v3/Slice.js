function Slice() {
 this.col1 = int(random(75, 255));
 this.col2 = int(random(75, 255));
this.col3 = int(random(75, 255));
 
 this.show = function(sliceVal) {
  push();
  translate((2/3) * width , height / 2);
  rotate(offsetVal);
  rotate((6.28319 / slices.length) * sliceVal);
  fill(this.col1, this.col2, this.col3);
  arc(0, 0, 300, 300, 0, (6.28319 / slices.length), PIE); 
  rotate(-1.5708);
  rotate((6.28319 / 2) / slices.length);
  fill(0);
  textSize(20 - (pieSliceName[sliceVal].length / 6) - pieSliceName.length); 
  textAlign(CENTER);
  text(pieSliceName[sliceVal], 0, 110);
  pop();
 }
  
}
