document.addEventListener("DOMContentLoaded", function () {
    class Bird {
        constructor() {
            this.x = 50;
            this.y = canvas.height / 2 - 15;
            this.radius = 15;
            this.color = "#FF5733";
            this.velocity = 0;
            this.gravity = 0.5;
            this.jumpStrength = 10;
        }

        jump() {
            this.velocity = -this.jumpStrength;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.closePath();
        }

        update() {
            this.velocity += this.gravity;
            this.y += this.velocity;

            if (this.y > canvas.height - this.radius) {
                this.y = canvas.height - this.radius;
                this.velocity = 0;
            }

            if (this.y < this.radius) {
                this.y = this.radius;
                this.velocity = 0;
            }
        }
    }

    class Pipes {
        constructor() {
            this.gap = 300;
            this.width = 20;
            this.color = "#7300e6";
            this.pipesArray = [];
            this.widthGrowthRate = 0.02;
        }

        spawnPipe() {
            const pipeHeight = Math.random() * (canvas.height - this.gap * 2) + this.gap;
            this.pipesArray.push({
                x: canvas.width,
                y: 0,
                height: pipeHeight
            });
            this.pipesArray.push({
                x: canvas.width,
                y: pipeHeight + this.gap,
                height: canvas.height - (pipeHeight + this.gap)
            });
        }

        draw() {
            for (let i = 0; i < this.pipesArray.length; i++) {
                ctx.fillStyle = this.color;
                ctx.fillRect(this.pipesArray[i].x, this.pipesArray[i].y, this.width, this.pipesArray[i].height);
            }
        }

        update() {
            this.width += this.widthGrowthRate;

            for (let i = 0; i < this.pipesArray.length; i++) {
                this.pipesArray[i].x -= 2;

                if (this.pipesArray[i].x + this.width < 0) {
                    this.pipesArray.splice(i, 1);
                    i--;
                }
            }

            if (frameCount % 100 === 0) {
                this.spawnPipe();
            }
        }
    }

    const canvas = document.getElementById("gameCanvas");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const bird = new Bird();
    const pipes = new Pipes();

    let score = 0;
    let frameCount = 0;
    let startTime = Date.now();

    function gameLoop() {
        frameCount++;

        bird.update();
        pipes.update();

        const currentTime = Date.now();
        const elapsedTimeInSeconds = Math.floor((currentTime - startTime) / 1000);

        ctx.fillStyle = "#ffffff";
        ctx.font = "20px Arial";
        ctx.fillText("Time: " + elapsedTimeInSeconds + "s", 10, 30);

        for (let i = 0; i < pipes.pipesArray.length; i++) {
            const pipe = pipes.pipesArray[i];
            const birdIsInsideBuis = bird.x + bird.radius > pipe.x &&
                                     bird.x - bird.radius < pipe.x + pipes.width &&
                                     bird.y + bird.radius > pipe.y &&
                                     bird.y - bird.radius < pipe.y + pipe.height;

            const birdIsInGap = bird.x + bird.radius > pipe.x &&
                                bird.x - bird.radius < pipe.x + pipes.width &&
                                bird.y - bird.radius < pipe.y + pipe.height / 2 - pipes.gap / 2 &&
                                bird.y + bird.radius > pipe.y + pipe.height / 2 + pipes.gap / 2;

            if (birdIsInsideBuis && !birdIsInGap) {
                alert("Game Over! Score: " + score + " Time: " + elapsedTimeInSeconds + "s klik op F5 om opnieuw te spelen.");
                resetGame();
            }
        }

        if (
            bird.x > pipes.pipesArray[0].x + pipes.width &&
            bird.x < pipes.pipesArray[0].x + pipes.width + 2
        ) {
            score++;
            pipes.pipesArray.shift();
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        bird.draw();
        pipes.draw();

        requestAnimationFrame(gameLoop);
    }

    function resetGame() {
        bird.y = canvas.height / 2 - 15;
        bird.velocity = 0;
        pipes.pipesArray = [];
        score = 0;
        frameCount = 0;
        startTime = Date.now();
    }

    document.addEventListener("keydown", function (e) {
        if (e.code === "Space") {
            bird.jump();
        }
    });

    pipes.spawnPipe();
    gameLoop();
});
