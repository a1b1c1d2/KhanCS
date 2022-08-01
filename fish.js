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
mouseClicked = function(){
    background(119, 223, 254);
    var width = random(50,100);
    drawFish(mouseX,mouseY,width,width/2,width/2,width/4,width/5,color(95,178,203),color(59,110,126),color(59,110,126));
};
draw = function() {
    
};