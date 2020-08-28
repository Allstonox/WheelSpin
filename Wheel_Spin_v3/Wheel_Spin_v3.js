var pieSliceBox;
var textVal = 25;
var textDecider = 1;
var button;
var spinning = false;
var wheelSpeed = 0;
var offsetVal = 0;
pieSliceName = [];
slices = [];

var pix;

function setup() {
createCanvas(600, 400);
createP();
pieSliceBox = createInput('');
pieSliceBox.input(addName);
button = new spinButton();
}


function draw() {
background(230);
textSize(16);
textAlign(LEFT, TOP);
text("Pie Slice Labels:", 0, 0);
text("Chosen Slice:", 0, 300);
push();
textSize(textVal);
textAlign(CENTER, CENTER);
fill(random(240, 255), random(0, 100), random(0, 0));
text("Wheel of Randomness", 400, 25);
pop();
if(textVal <= 25){
textDecider = 1;
}
if(textDecider == 1){
  textVal+=0.5;
}
if(textVal >= 32){
textDecider = 2;
}
if(textDecider == 2){
  textVal-=0.5;
}
for(var i = 0; i < pieSliceName.length; i++){
text( (i + 1) + ". " + pieSliceName[i], 0, i * 20 + 20);
}
if(spinning && wheelSpeed > 0){
 offsetVal = offsetVal + wheelSpeed;
 wheelSpeed -= 0.001;
 console.log(wheelSpeed);
}
if(spinning && wheelSpeed <= 0){
 spinning = false; 
}
if(slices.length > 0){
  for(var l = 0; l < slices.length; l++){
   slices[l].show(l); 
  }
button.show();
if(mouseIsPressed && dist(mouseX, mouseY, button.x, button.y) < button.r / 2){
 wheelSpin();
}
push();
stroke(0, 0, 0);
fill(255, 0, 0);
triangle(390, 360, 400, 345, 410, 360);
pop();

pix = get(400, 342);
  for(var m = 0; m < slices.length; m++){
   if(pix[0] == slices[m].col1 && pix[1] == slices[m].col2 && pix[2] == slices[m].col3 && wheelSpeed <= 0){
     push();
     textAlign(LEFT, TOP);
     text(pieSliceName[m], 105, 300);
     pop();
   }
}
}
}

function keyPressed() {
  if(keyCode == ENTER && pieSliceName.length < 10 && pieSliceText != null && pieSliceText.length <= 20){
    pieSliceName.push(pieSliceText);
    slices.push(new Slice());
    console.log(pieSliceText.length);
    pieSliceBox.remove();
    pieSliceBox = createInput('');
    pieSliceBox.input(addName);
  }
}

function addName() {
  pieSliceText = this.value();
}

function wheelSpin(){
  if(wheelSpeed <= 0.5){
  wheelSpeed = wheelSpeed + random(0.004, 0.006);
  }
  if(pieSliceName.length > 0){
  spinning = true;
  }
}
