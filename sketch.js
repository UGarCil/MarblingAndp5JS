let drops = [];
let containerWidth = document.getElementById('canvas-container').offsetWidth;
let containerHeight = document.getElementById('canvas-container').offsetHeight;

function setup() {
    canvas = createCanvas(containerWidth, 500);
    canvas.parent("canvas-container");
}


function mousePressed() {
    let drop = new Drop(mouseX, mouseY, 50);
    drops.push(drop);

    for (let other of drops) {
        other.marble(drop);
    }
}
function draw() {
    background(33);
    for (let drop of drops) {
        drop.show();
    }
}

function windowResized() {
    containerWidth = document.getElementById('canvas-container').offsetWidth;
    containerHeight = document.getElementById('canvas-container').offsetHeight;
    resizeCanvas(containerWidth,500);
}