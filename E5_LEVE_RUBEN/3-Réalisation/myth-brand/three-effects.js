const canvas = document.createElement("canvas");
canvas.id = "bg3d";
document.body.prepend(canvas);

const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

let particles = Array.from({ length: 80 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  z: Math.random() * 2 + 0.5
}));

function animate() {
  ctx.clearRect(0,0,canvas.width,canvas.height);

  particles.forEach(p => {
    p.y += p.z;

    if (p.y > canvas.height) p.y = 0;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.z * 2, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(0,150,255,0.7)";
    ctx.fill();
  });

  requestAnimationFrame(animate);
}

animate();