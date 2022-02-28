noseX=0;
noseY=0;
function preload(){
    mustache=loadImage('https://i.postimg.cc/BnDFdhfQ/mustache-png-1326.png');
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.position(800,200);
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
   poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function modelLoaded()
{
    console.log("PoseNet is Inistalized");
}

function gotPoses(results)
{
if(results.length > 0)
{
    console.log(results);
    noseX = results[0].pose.nose.x;
}   noseY = results[0].pose.nose.y;
}

function draw(){
    image(video,0,0,300,300);
    image(mustache,noseX,noseY,90,80)
}

function take_snapshot(){
    save("my_filter_picture.png");
}