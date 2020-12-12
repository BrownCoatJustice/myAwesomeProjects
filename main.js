

var canvas = new fabric.Canvas("blockCanvas");

blockWidth = 30;
blockHeight = 30;
blockObject = "";

playerX = 10;
playerY = 10;
playerObject = "";

function playerAdd() {
    fabric.Image.fromURL("player.png", function (Img) {
        playerObject = Img;
        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(140);
        playerObject.set({
            top: playerY,
            left: playerX
        });
        canvas.add(playerObject);
    });
}

function newImage(getImage) {
    fabric.Image.fromURL(getImage, function (Img) {
        blockObject = Img;
        blockObject.scaleToWidth(blockWidth);
        blockObject.scaleToHeight(blockHeight);
        blockObject.set({
            top: playerY,
            left: playerX
        });
        canvas.add(blockObject);
    });
}

window.addEventListener("keydown", yourkeyDown);
function yourkeyDown(e) {
    keyPressed = e.keyCode;
    if (keyPressed == '38') {
        up();
    }
    if (keyPressed == '40') {
        down();
    }
    if (keyPressed == '37') {
        left();
    }
    if (keyPressed == '39') {
        right();
    }
    if(e.shiftKey == true && keyPressed == '80'){
        blockWidth = blockWidth + 10;
        blockHeight = blockHeight + 10; 
        document.getElementById("widthBlock").innerHTML=blockWidth;
        document.getElementById("heightBlock").innerHTML=blockHeight;
    }
    if(e.shiftKey && keyPressed == '77'){
        blockWidth = blockWidth-10;
        blockHeight = blockHeight-10;
        document.getElementById("widthBlock").innerHTML = blockWidth;
        document.getElementById("heightBlock").innerHTML = blockHeight;
    }
    if(keyPressed == '87' ){
        newImage('wall.jpg');
    }
    if(keyPressed == '67'){
        newImage('cloud.jpg');
    }
    if(keyPressed == '68'){
        newImage('dark_green.png');
    }
    if(keyPressed == '82'){
        newImage('roof.jpg');
    }
    if(keyPressed== '84'){
        newImage('trunk.jpg');
    }
    if(keyPressed == '85'){
        newImage('unique.png');
    }
    if(keyPressed== '89'){
        newImage('yellow_wall.png')
    }
}
function up() {
    if (playerY >= 0) {
        playerY = playerY - blockHeight;
        canvas.remove(playerObject);
        playerAdd();
    }

}
function down() {
    if (playerY <= 460) {
        playerY = playerY + blockHeight;
        canvas.remove(playerObject);
        playerAdd();
    }

}
function left() {
    if (playerX >= 0) {
        playerX = playerX - blockWidth;
        canvas.remove(playerObject);
        playerAdd();
    }

}
function right() {
    if (playerX <= 650) {
        playerX = playerX + blockWidth;
        canvas.remove(playerObject);
        playerAdd();
    }

}