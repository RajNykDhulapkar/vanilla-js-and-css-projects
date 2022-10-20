let cx, cy;
let secondRadius;
let minuteRadius;
let hoursRadius;
let clockDiameter;

function setup() {
    createCanvas(400, 400);
    stroke(255);

    let radius = min(width, height) / 2;
    secondRadius = radius * 0.71;
    minuteRadius = radius * 0.6;
    hoursRadius = radius * 0.5;
    clockDiameter = radius * 1.7;

    cx = width / 2;
    cy = height / 2;
}

function draw() {
    background(220);

    // drawing the clock background
    noStroke();
    fill(244, 122, 158);
    ellipse(cx, cy, clockDiameter + 25, clockDiameter + 25);
    fill(237, 34, 93);
    ellipse(cx, cy, clockDiameter, clockDiameter);

    // angels measured from positive direction of the x axis
    // turn the angels values by - PI/2
    // map the value from 0 to 2*PI
    let s = map(second(), 0, 60, 0, TWO_PI) - HALF_PI;
    let m = map(minute() + norm(second(), 0, 60), 0, 60, 0, TWO_PI) - HALF_PI;
    let h = map(hour() + norm(minute(), 0, 60), 0, 60, 0, TWO_PI) - HALF_PI;

    // draw the hands of the clock
    stroke(255);
    strokeWeight(1);
    line(cx, cy, cx + cos(s) * secondRadius, cy + sin(s) * secondRadius);
    strokeWeight(2);
    line(cx, cy, cx + cos(m) * minuteRadius, cy + sin(m) * minuteRadius);
    strokeWeight(4);
    line(cx, cy, cx + cos(h) * hoursRadius, cy + sin(h) * hoursRadius);

    // Draw the minute ticks
    strokeWeight(2);
    beginShape(POINTS);
    for (let a = 0; a < 360; a += 6) {
        let angle = radians(a);
        let x = cx + cos(angle) * (secondRadius + 5);
        let y = cy + sin(angle) * (secondRadius + 5);
        vertex(x, y);
    }
    endShape();
}
