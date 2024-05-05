let drops = [];
let containerWidth = document.getElementById('canvas-container').offsetWidth;
let containerHeight = document.getElementById('canvas-container').offsetHeight;
let isMousePressed = false;
let startX = 0;
let startY = 0;

function setup() {
    canvas = createCanvas(containerWidth, containerHeight);
    canvas.parent("canvas-container");
    for (let i = 0; i < 100; i++) {
        addInk(random(width), random(height), random(10, 50));
    }


}

// function mouseDragged() {
//     // update vector and magnitude
//     let v = createVector(mouseX - startX, mouseY - startY);
//     v.normalize();
//     tineLine(v, mouseX, mouseY, 2, 80);
//     // Update the initial mouse position
//     startX = mouseX;
//     startY = mouseY;
// }

function mousePressed() {
    isMousePressed = true;
}
function mouseReleased() {
    isMousePressed = false;
}

// function tineLine(xl,z,c){
//     for (let drop of drops) {
//         drop.tine(xl,z,c);
//     }
// }

function tineLine(v, x, y, z, c) {
    for (let drop of drops) {
        drop.tine(v, x, y, z, c);
    }
}


function addInk(x, y, r) {
    let drop = new Drop(x, y, r);
    drops.push(drop);
    for (let other of drops) {
        other.marble(drop);
    }
}


function draw() {
    background(240);

    // display drops
    for (let drop of drops) {
        drop.show();
    }

    let v = createVector(mouseX - startX, mouseY - startY);
    v.normalize();
    tineLine(v, mouseX, mouseY, 2, 80);
    // Update the initial mouse position
    startX = mouseX;
    startY = mouseY;

}

function windowResized() {
    containerWidth = document.getElementById('canvas-container').offsetWidth;
    containerHeight = document.getElementById('canvas-container').offsetHeight;
    resizeCanvas(containerWidth, 500);
}