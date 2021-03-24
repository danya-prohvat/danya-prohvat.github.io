let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext("2d");

let score = 0, lives = 3, rectPos = 425, y = 50, click = false;
let blocks = [[30, 270, 510, 750], [150, 390, 630, 870], [30, 150, 270, 390, 510, 630, 750, 870], [30, 150, 270, 390, 510, 630, 750, 870]];
// blocks[1][5] = false;
// blocks[0][2] = false;

let ball = {
    x: 497,
    y: 535,
    xSpeed: -8,
    ySpeed: -8,
}

let drawScore = score => {
    ctx.font = "20px Courier";
    ctx.fillStyle = "DodgerBlue";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText(`score: ${score}`, 10, 5);
};
let drawLives = lives => {
    ctx.font = "20px Courier";
    ctx.fillStyle = "DodgerBlue";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText(`lives: ${lives}`, 890, 5);
};
let drawRect = rectPos => {
    ctx.fillStyle = "DodgerBlue";
    ctx.fillRect(rectPos, 550, 150, 20);
};
let drawBall = ball => {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, 15, 0, Math.PI * 2, true);
    ctx.fill();
};
let drawBlocks = blocks => {
    blocks.forEach((ell, index) => {
        blocks[index].forEach(el => {
            if (el == false) {

            } else {
                ctx.fillStyle = "DodgerBlue";
                ctx.fillRect(el, y, 100, 50);
            }
        });
        y += 70;
    });
    y = 50;
};
let interval = setInterval(function () {
    ctx.clearRect(0, 0, 1000, 600);
    drawScore(score);
    drawLives(lives);
    drawBlocks(blocks);
    drawRect(rectPos);
    drawBall(ball);
    if (click) {
        ball.x += ball.xSpeed;
        ball.y += ball.ySpeed;

    }
    if (ball.x > 1000 || ball.x < 0) ball.xSpeed *= -1;
    if (ball.y > 600 || ball.y < 0) ball.ySpeed *= -1;
    // ball.x < rectPos && ball.x > rectPos+150 &&
    if (ball.y >= 550 && ball.y <= 551 && ball.x >= rectPos && ball.x <= rectPos + 150) {
        ball.ySpeed *= -1;
        ball.xSpeed *= 1;
    } else if (ball.y >= 570) {
        ball.x = 497;
        ball.y = 535;
        click = false;
        rectPos = 425;
        lives -= 1;
    }
    if (lives == 0) {
        if (confirm("You lose")) {
            clearInterval(interval);
            window.location.reload()
        }
        clearInterval(interval);
    }
    if (score == 24) {
        if (confirm("You won")) {
            clearInterval(interval);
            window.location.reload()
        }
        clearInterval(interval);
    }
    blocks.forEach((ell, index) => {
        blocks[index].forEach((el, indexx) => {
            if (el != false && ball.y >= y && ball.y <= y+50 && ball.x >= el && ball.x <= el + 100){
                ball.ySpeed *= -1;
                ball.xSpeed *= 1;
                blocks[index][indexx] = false;
                score++;
            }
        });
        y += 70;
    });
    y = 50;



}, 20);

canvas.addEventListener('mousemove', e => {
    rectPos = e.screenX - 500;
    if (rectPos < 0) rectPos = 0;
    if (rectPos > 850) rectPos = 850;

    if (!click) {
        ball.x = e.screenX - 425;
        if (rectPos <= 0) ball.x = 75;
        if (rectPos >= 850) ball.x = 925;
    }
});
canvas.addEventListener('click', e => {
    click = true;
});