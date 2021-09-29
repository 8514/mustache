noseX=0;
noseY=0;
function preload() {
mustache=loadImage('https://i.postimg.cc/9MPnM9d6/mustache-icon-isolated-on-white-260nw-1499226089.jpg');
}

function setup() { canvas = createCanvas(640, 480); 
canvas.position(110, 250); 
video = createCapture(VIDEO); 
video.hide(); 

posenet=ml5.posenet(video,modelLoaded);
posenet.console('pose',gotPoses);
 }

function modelLoaded(){
console.log('PoseNet Is Initiated')    
}

 function draw() { 
     image(video, 0, 0, 300, 300);
     image(mustache,noseX,noseY,30,30);

}

 function take_snapshot(){ save('student_name.png');
 }
function gotposes(results)
{
if(results.length>0)
{
console.log(results);
noseX=results[0].posenet.noseX.x; 
noseY=results[0].posenet.noseY.y;
console.log("nose x =" + noseX) ;
console.log("nose y =" + noseY) ;       
  }    
}
 
