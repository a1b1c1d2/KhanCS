noStroke();
var bodyX = 200;
var bodyY = 200;
var faceSize = 206;
var earSize = 1/2 * faceSize;
var eyeSize = 1/8 * faceSize;
var mouthSize = 1/5 * faceSize;

draw = function() {
    background(206, 239, 240);
    fill(89,52,17);
    ellipse(bodyX - faceSize * 2/5,bodyY - faceSize * 2/5,earSize,earSize);
    ellipse(bodyX + faceSize * 2/5,bodyY - faceSize * 2/5,earSize,earSize);
    fill(163,113,5);
    ellipse(bodyX,bodyY,faceSize,faceSize);
    fill(0,0,0);
    ellipse(bodyX - faceSize *1/4,bodyY - faceSize *1/8,eyeSize,eyeSize);
    ellipse(bodyX + faceSize *1/4,bodyY - faceSize *1/8,eyeSize,eyeSize);
    fill(89,52,20);
    ellipse(bodyX,bodyY + faceSize *1/8,4/3*mouthSize,mouthSize);
};
