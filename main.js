noseX = 0;
noseY = 0;

function setup()
{
    createCanvas(300, 300);
    canvas = createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 400);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function preload()
{
    mustacheImage = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}

function gotPoses(results, error)
{
    if (results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x - -30;
        noseY = results[0].pose.nose.y - 50;
        console.log("nose x =" + noseX);
        console.log("nose y =" + noseY);
    }
    if (error)
    {
        console.log("error")
    }
}

function modelLoaded()
{
    console.log("model has been succesfully loaded!")
}

function draw()
{
    image(video, 0, -100, 500, 500);
    image(mustacheImage, noseX, noseY, 75, 75);
}

function takeSnapshot()
{
    //code for taking snapshot
    
}