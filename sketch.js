let drops = [];

function setup(){
    createCanvas(400,400);
}


function mousePressed(){
    let drop = new Drop(mouseX, mouseY,50);
    drops.push(drop);

}
function draw(){
    background(33);
    for (let drop of drops){
        drop.show();
    }
}