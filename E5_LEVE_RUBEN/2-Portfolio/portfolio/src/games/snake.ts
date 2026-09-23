export const SnakeGame = (): string => `
  <section class="hero">
    <h2>🐍 Snake — Mini Jeu TypeScript</h2>
    <canvas id="snake" width="400" height="400"></canvas>
  </section>
`;

export function startSnake() {
  const canvas = document.getElementById("snake") as HTMLCanvasElement;
  if (!canvas) return;

  const ctx = canvas.getContext("2d")!;

  const size = 20;
  let snake = [{ x: 10, y: 10 }];
  let food = { x: 5, y: 5 };
  let dx = 1;
  let dy = 0;

  function draw() {
    ctx.fillStyle = "#0d0f14";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // snake
    ctx.fillStyle = "#4da3ff";
    snake.forEach(s =>
      ctx.fillRect(s.x * size, s.y * size, size - 2, size - 2)
    );

    // food
    ctx.fillStyle = "lime";
    ctx.fillRect(food.x * size, food.y * size, size - 2, size - 2);
  }

  function update() {
    const head = { x: snake[0].x + dx, y: snake[0].y + dy };
    snake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
      food = {
        x: Math.floor(Math.random() * 20),
        y: Math.floor(Math.random() * 20)
      };
    } else {
      snake.pop();
    }

    // collision mur
    if (
      head.x < 0 ||
      head.y < 0 ||
      head.x >= 20 ||
      head.y >= 20
    ) {
      snake = [{ x: 10, y: 10 }];
      dx = 1;
      dy = 0;
    }

    draw();
  }

  setInterval(update, 120);

  window.addEventListener("keydown", e => {
    if (e.key === "ArrowUp" && dy === 0) {
      dx = 0; dy = -1;
    }
    if (e.key === "ArrowDown" && dy === 0) {
      dx = 0; dy = 1;
    }
    if (e.key === "ArrowLeft" && dx === 0) {
      dx = -1; dy = 0;
    }
    if (e.key === "ArrowRight" && dx === 0) {
      dx = 1; dy = 0;
    }
  });

  draw();
}