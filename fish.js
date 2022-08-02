noStroke();
var drawFish = function(x,y,bodyWidth,bodyHeight,tailWidth,tailHeight,eyeSize,bodyColor,tailColor,eyeColor){
    fill(bodyColor);
    ellipse(x,y,bodyWidth,bodyHeight);
    fill(tailColor);
    triangle(x-bodyWidth/2,y,x-bodyHeight/2 - tailWidth,y - tailHeight,x-bodyHeight/2 - tailWidth,y + tailHeight);
    fill(eyeColor);
    ellipse(x + bodyHeight/4,y,eyeSize,eyeSize);
    return 0;
};
var drawGrass = function(){
    stroke(0, 170, 0);
    strokeWeight(10);
    noFill();
    bezier(110,390,mouseX - 20,mouseY + 20,mouseX,mouseY -40,mouseX - 50,mouseY -180);
    bezier(110,390,mouseX + 10,mouseY - 20,mouseX,mouseY -40,mouseX - 50,mouseY -80);
    bezier(390,390,mouseX + 10,mouseY - 20,mouseX,mouseY -40,mouseX - 50,mouseY +80);
    bezier(390,390,mouseX + 10,mouseY - 20,mouseX,mouseY -40,mouseX - 50,mouseY +80);
};
var drawStone = function(){
    fill(mouseX, mouseY, mouseY);
    ellipse(300,350,80,30);
    ellipse(400,390,80,30);
    ellipse(350,390,80,30);
    ellipse(150,370,40,30);
    ellipse(200,390,40,30);
    fill(mouseY, mouseX, mouseY);
    ellipse(170,340,80,30);
    ellipse(100,390,80,30);
    ellipse(200,360,80,30);
    ellipse(300,390,80,30);
    fill(mouseX, mouseX, mouseY);
    ellipse(300,380,70,30);
    ellipse(30,400,70,30);
    ellipse(150,390,80,30);
    ellipse(250,370,40,30);
    ellipse(130,350,40,30);
    ellipse(120,370,40,30);
    fill(mouseX, mouseX, mouseX);
    ellipse(200,380,70,30);
    ellipse(230,390,80,30);
    ellipse(370,365,60,30);
    ellipse(350,365,40,30);
};
mouseClicked = function(){
    background(119, 223, 254);
    drawStone();
    drawGrass();
    noStroke();
    var width = random(50,100);
    drawFish(mouseX,mouseY,width,width/2,width/2,width/4,width/5,color(95,mouseX,203),color(mouseY,mouseX,126),color(59,mouseX,mouseY));
};
draw = function() {
    
};








         
         