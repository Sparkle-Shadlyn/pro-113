function preload(){
}
function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
video = createCapture(VIDEO);
video.hide();
}
function draw(){
    image(100, 80,300 , 250)
    stroke(168, 10, 10);
    fill(168, 10, 10);
    circle(40,40,50);
    circle(460,360,50);
    circle(460,360,50);
    stroke(50, 168, 82);
    fill(50, 168, 82);
        rectangle(63, 27, 375, 25);
        rectangle(63, 347, 375, 25);
        rectangle(27, 63, 25, 275);
        rectangle(448, 63, 25, 275);
}
function take_snapshot (){
    save('frame.png');
    }