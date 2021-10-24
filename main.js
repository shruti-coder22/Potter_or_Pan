var song = "";

var left_y = 0;
var right_y = 0;

function preload() {
    song = loadSound("music.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        
        right_y = results[0].pose.rightWrist.y;
        console.log("The y position of the right wrist is " + right_y);

        left_y = results[0].pose.leftWrist.y;
        console.log("The y position of the left wrist is " + left_y);
    }
}

function modelLoaded() {
    console.log("❁poseNet modal initialized❁")
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function play() {
    song.play();
}

function pause() {
    song.pause();
}

function stop() {
    song.stop();
}