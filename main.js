var nosex=0;
var nosey=0;
var leftwristx=0;
var rightwristx=0;
var difference=0;

function setup(){
video=createCapture(VIDEO);
video.size(550,500);

canvas=createCanvas(550,550);
canvas.position(560, 150);

poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on("pose", gotPoses);
}

function draw(){
background ("#32f097");
fill("#7118ed");
stroke("#7118ed");
square(nosex, nosey, difference);
document.getElementById("krk2").innerHTML="The width and height of the square will be = "+difference+"px";
}

function preload(){

}

function modelLoaded(){
    console.log("PoseNet Is Initialize");
}

function gotPoses(results){
    if (results.length>0){
    
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;

        console.log("nosex="+nosex+"nosey="+nosey);

        leftwristx=results[0].pose.leftWrist.x;
        rightwristx=results[0].pose.rightWrist.x;

        difference=floor(leftwristx-rightwristx);

        console.log("leftwristx="+leftwristx+" rightwristx="+rightwristx+" difference="+difference);
    
    }
}