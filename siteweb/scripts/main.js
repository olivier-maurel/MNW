pattern     = document.getElementById('pattern');
title       = document.getElementById('title');
centerBlock = document.getElementById('centerBlock');
pattern.style.top = '-100vh';
pattern.style.left = '-100vw';

// numBalls = 400;
// //colors = ["#534468", "#696175", "#5e6271", "#3d435b", "#4e3457"];
// colors = ["#ffffff50", "#ffffff30", "#ffffff90", "#ffffff70", "#ffffffAA"];
// for (let i = 0; i < numBalls; i++) {
//     let ball = document.createElement("div");
//     ball.classList.add("ball");
//     ball.style.background = colors[Math.floor(Math.random() * colors.length)];
//     ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
//     ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
//     ball.style.transform = `scale(${Math.random()})`;
//     ball.style.width = `${Math.random() / 2}rem`;
//     ball.style.height = ball.style.width;
//     centerBlock.append(ball);
// }

function canvasParticles() {
    canvas = document.getElementById('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    context = canvas.getContext("2d");

    numPart = 100;
    colors = ["#ffffff", "#98B9FF", "#FFB198", "#FAFF98"];
    for (let j = 0; j < colors.length; j++) {
        context.beginPath();
        for (let i = 0; i < numPart; i++) {
            widthPart = Math.random() * 1.7;
            xPart = Math.floor(Math.random() * canvas.width);
            yPart = Math.floor(Math.random() * canvas.height);
            context.fillStyle = colors[j];
            context.arc(xPart, yPart, widthPart, 0, Math.PI*2, true);
            context.closePath();
        }
        context.fill();
    }
}
canvasParticles();









arrowUp = document.getElementById('arrowUp');
arrowLeft = document.getElementById('arrowLeft');
arrowDown = document.getElementById('arrowDown');
arrowRight = document.getElementById('arrowRight');

function arrowPosition() {
    if (pattern.style.top == '-100vh' && pattern.style.left == '-100vw') {
        arrowUp.style.top = 'calc(100vh + 10px)';
        arrowUp.style.transform = 'rotate(0deg) translateX(-50%)';
        arrowDown.style.bottom = 'calc(100vh + 10px)';
        arrowDown.style.transform = 'rotate(0deg) translateX(-50%)';
        arrowRight.style.right = 'calc(100vw + 10px)';
        arrowRight.style.transform = 'rotate(0deg) translateY(-50%)';
        arrowLeft.style.left = 'calc(100vw + 10px)';
        arrowLeft.style.transform = 'rotate(0deg) translateY(-50%)';
    } 
    else if (pattern.style.top == '0vh') {
        arrowUp.style.top = 'calc(100vh - 40px)';
        arrowUp.style.transform = 'rotate(180deg) translateX(50%)';
    } 
    else if (pattern.style.left == '0vw') {
        arrowLeft.style.left = 'calc(100vw - 40px)';
        arrowLeft.style.transform = 'rotate(180deg) translateY(50%)';
    } 
    else if (pattern.style.top == '-200vh') {
        arrowDown.style.bottom = 'calc(100vh - 40px)';
        arrowDown.style.transform = 'rotate(180deg) translateX(50%)'; 
    } 
    else if (pattern.style.left == '-200vw') {
        arrowRight.style.right = 'calc(100vw - 40px)';
        arrowRight.style.transform = 'rotate(180deg) translateY(50%)';
    }
}

function keyPress(code) {
    console.log(code);
    if (pattern.style.top == '-100vh' && pattern.style.left == '-100vw') {
        switch (code) {
            case 'ArrowUp':
                pattern.style.top = '0vh';
                title.style.top = '30vh';
                arrowPosition();
                break;
            case 'ArrowLeft':
                pattern.style.left = '0vw';
                title.style.left = '30vw';
                arrowPosition();
                break;
            case 'ArrowDown':
                pattern.style.top = '-200vh';
                title.style.top = '70vh';
                arrowPosition();
                break;
            case 'ArrowRight':
                pattern.style.left = '-200vw';
                title.style.left = '70vw';
                arrowPosition();
                break;
        }
    } else if (pattern.style.left == '0vw' || pattern.style.left == '-200vw' || pattern.style.top == '0vh' || pattern.style.top == '-200vh') {
        switch (code) {
            case 'ArrowUp':
                pattern.style.top = '-100vh';
                title.style.top = '50vh';
                arrowPosition();
                break;
            case 'ArrowLeft':
                pattern.style.left = '-100vw';
                title.style.left = '50vw';
                arrowPosition();
                break;
            case 'ArrowDown':
                pattern.style.top = '-100vh';
                title.style.top = '50vh';
                arrowPosition();
                break;
            case 'ArrowRight':
                pattern.style.left = '-100vw';
                title.style.left = '50vw';
                arrowPosition();
                break;
        }
    } 
}

function arrowPress(arrow) {
    switch (arrow) {
        case arrowUp:
            keyPress('ArrowUp');
            break;
        case arrowLeft:
            keyPress('ArrowLeft');
            break;
        case arrowDown:
            keyPress('ArrowDown');
            break;
        case arrowRight:
            keyPress('ArrowRight');
            break;               
    }
}