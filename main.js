noseX = 0;
noseY=0;



function preload()
{
  m = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}

function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose' , gotposes);
}

function draw()
{
  image(video,0,0,300,300);
  image(m,noseX+140,noseY+175,30,30);
}

function take_snapshot()
{
    save('myFilterImage.png');
}

function modelLoaded(){
    console.log('PoseNet is initialized');
}

function gotposes(results)
{
    if(results.lenght > 0)
    {
        console.log(results);
        noseX= results[0].pose.net.x;
        noseY= results[0].pose.net.y;
        console.log("nose x = "+ results[0].pose.nose.x);
        console.log("nose y =" + results[0].pose.nose.y);
    }
}