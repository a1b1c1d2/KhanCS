var stars = [];
var t = 0;
var shootStar = function(xPos,yPos){
    this.x = xPos;
    this.y = yPos;
    this.oldX = xPos;
    this.oldY = yPos;
    this.size = 15;
};

draw = function() {
    background(19,0,82);
    fill(255,255,255);
    noStroke();
    for(var i = 0;i < stars.length;i++){
        ellipse(stars[i].x,stars[i].y,stars[i].size,stars[i].size);
        var size = stars[i].size;
        var a = 100;
        for(var j = stars[i].x,k = stars[i].y;j< stars[i].oldX, k > stars[i].oldY;j++,k--){
            a -= 2;
            fill(255, 255, 255,a);
            size  -= 0.2;
            ellipse(j,k,size,size);
        }
        stars[i].x -= 1;
        stars[i].y += 1;
        
    }
    if(stars.length > 50){
        stars.shift();
    }
    if (t % 40 === 20){
        stars.push(new shootStar(random(0,500),random(-100,0)));
        stars.push(new shootStar(random(400,500),random(200,350)));
    }
    t ++;
    fill(0,4,84,20);
    rect(0,0,400,400);
    
    if(t % 60 === 0){
        for(var i = 0;i < 5;i++){
        stroke(255,255,255);
        strokeWeight(5);
        point(random(width),random(height));
        
        } 
    }
    
    noStroke();
    for(var i = 0;i < 6;i++){
        fill(192, 191,214,10);
        ellipse(200,400+i*23,400,400);
    }
    fill(51,51,51);
    rect(0,350,400,50);
    beginShape();
    vertex(2,341);
    vertex(57,320);
    vertex(91,335);
    vertex(118,338);
    vertex(147,316);
    vertex(188,317);
    vertex(233,324);
    vertex(258,331);
    vertex(304,311);
    vertex(316,311);
    vertex(346,317);
    vertex(365,321);
    vertex(400,310);
    vertex(398,394);
    vertex(1,398);
    vertex(0,341);   
    endShape();
    
    fill(38,38,38);
    beginShape();
    vertex(1,371);
    vertex(37,355);
    vertex(63,360);
    vertex(78,367);
    vertex(87,373);
    vertex(116,371);
    vertex(153,366);
    vertex(178,364);
    vertex(198,350);
    vertex(233,347);
    vertex(275,350);
    vertex(321,340);
    vertex(345,358);
    vertex(377,356);
    vertex(398,360);
    vertex(395,361);
    vertex(406,400);
    vertex(0,400);   
    endShape();
    
    fill(28,28,28);
    beginShape();
    vertex(2,386);
    vertex(51,375);
    vertex(80,388);
    vertex(111,393);
    vertex(147,387);
    vertex(180,383);
    vertex(215,386);
    vertex(296,390);
    vertex(340,390);
    vertex(362,381);
    vertex(387,386);
    vertex(396,392);
    vertex(400,400);
    vertex(0,401);
    vertex(0,393);   
    endShape();
    
};




