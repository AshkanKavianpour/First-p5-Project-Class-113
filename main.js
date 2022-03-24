function preload() {

}

function setup() {
    canvas=createCanvas(640, 480);
    canvas.position(110, 250);
    video=createCapture(VIDEO);
    video.hide();

    tint_color="";
}

function draw() {
    image(video, 220, 150, 200, 200);
    fill(255, 0, 0);
    rect(50, 70, 550, 20);

    rect(50, 410, 550, 20);

    rect(50, 70, 20, 350);

    rect(580, 70, 20, 350);

    fill(0, 50, 150);
    circle(50, 70, 80);
    circle(50, 410, 80);
    circle(580, 70, 80);
    circle(580, 410, 80);

    
}

function take_snapshot() {
    save('student_name.png');

}

