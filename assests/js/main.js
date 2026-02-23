console.log("JS funcionando");
function draw() {
  const canvas = document.getElementById("canvas");
  if (!canvas.getContext) return;

  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  /* =========================
     🔝 FILA 1
  ========================= */

  // 🟩 Cuadro verde con borde
  ctx.fillStyle = "#3ec1b3";
  ctx.fillRect(40, 40, 120, 120);

  ctx.fillStyle = "#ffffff";
  ctx.fillRect(60, 60, 80, 80);

  ctx.strokeStyle = "#2c3e50";
  ctx.lineWidth = 4;
  ctx.strokeRect(60, 60, 80, 80);

  // 🔶 Triángulo naranja
  ctx.beginPath();
  ctx.moveTo(260, 100);
  ctx.lineTo(330, 50);
  ctx.lineTo(330, 150);
  ctx.closePath();
  ctx.fillStyle = "#f17464";
  ctx.fill();

  // 🙂 Carita correcta (solo contorno)

ctx.strokeStyle = "#2c3e50";
ctx.lineWidth = 3;

// Cara
ctx.beginPath();
ctx.arc(500, 100, 60, 0, Math.PI * 2);
ctx.stroke();

// Ojo izquierdo
ctx.beginPath();
ctx.arc(480, 85, 5, 0, Math.PI * 2);
ctx.stroke();

// Ojo derecho
ctx.beginPath();
ctx.arc(520, 85, 5, 0, Math.PI * 2);
ctx.stroke();

// Sonrisa
ctx.beginPath();
ctx.arc(500, 115, 30, 0, Math.PI);
ctx.stroke();

  // 🔷 Triángulos extra
  ctx.beginPath();
  ctx.moveTo(650, 60);
  ctx.lineTo(720, 60);
  ctx.lineTo(650, 140);
  ctx.closePath();
  ctx.fillStyle = "#db34b7";
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(780, 140);
  ctx.lineTo(780, 60);
  ctx.lineTo(700, 140);
  ctx.closePath();
  ctx.stroke();

/* =========================
   🔽 FIGURA ARCOS (LÍNEA 2)
========================= */

ctx.strokeStyle = "#1f6cb9";
ctx.fillStyle = "black";
ctx.lineWidth = 2;

/* =========================
   ❤️ CORAZÓN (LÍNEA 2)
========================= */

ctx.fillStyle = "#e81313";

// Posición base (puedes moverla)
const heartX = 450;
const heartY = 300;

ctx.beginPath();
ctx.moveTo(heartX, heartY);

ctx.bezierCurveTo(heartX, heartY - 3, heartX - 5, heartY - 15, heartX - 25, heartY - 15);
ctx.bezierCurveTo(heartX - 55, heartY - 15, heartX - 55, heartY + 20, heartX - 55, heartY + 20);
ctx.bezierCurveTo(heartX - 55, heartY + 40, heartX - 30, heartY + 70, heartX, heartY + 90);
ctx.bezierCurveTo(heartX + 30, heartY + 70, heartX + 55, heartY + 40, heartX + 55, heartY + 20);
ctx.bezierCurveTo(heartX + 55, heartY + 20, heartX + 55, heartY - 15, heartX + 25, heartY - 15);
ctx.bezierCurveTo(heartX + 10, heartY - 15, heartX, heartY - 3, heartX, heartY);

ctx.fill();
/* =========================
   👾 FANTASMA (LÍNEA 2)
========================= */

const offsetX = 550;  // posición horizontal
const offsetY = 260;  // posición vertical

ctx.strokeStyle = "#2c3e50";
ctx.fillStyle = "black";

// Cuerpo
roundedRect(ctx, offsetX + 12, offsetY + 12, 150, 150, 15);
roundedRect(ctx, offsetX + 19, offsetY + 19, 150, 150, 9);
roundedRect(ctx, offsetX + 53, offsetY + 53, 49, 33, 10);
roundedRect(ctx, offsetX + 53, offsetY + 119, 49, 16, 6);
roundedRect(ctx, offsetX + 135, offsetY + 53, 49, 33, 10);
roundedRect(ctx, offsetX + 135, offsetY + 119, 25, 49, 10);

// Parte negra
ctx.beginPath();
ctx.arc(offsetX + 37, offsetY + 37, 13, Math.PI / 7, -Math.PI / 7);
ctx.lineTo(offsetX + 31, offsetY + 37);
ctx.fill();

// Detalles cuadrados
for (let i = 0; i < 8; i++) {
  ctx.fillRect(offsetX + 51 + i * 16, offsetY + 35, 4, 4);
}

for (let i = 0; i < 6; i++) {
  ctx.fillRect(offsetX + 115, offsetY + 51 + i * 16, 4, 4);
}

for (let i = 0; i < 8; i++) {
  ctx.fillRect(offsetX + 51 + i * 16, offsetY + 99, 4, 4);
}

// Parte inferior
ctx.beginPath();
ctx.moveTo(offsetX + 83, offsetY + 116);
ctx.lineTo(offsetX + 83, offsetY + 102);
ctx.bezierCurveTo(offsetX + 83, offsetY + 94, offsetX + 89, offsetY + 88, offsetX + 97, offsetY + 88);
ctx.bezierCurveTo(offsetX + 105, offsetY + 88, offsetX + 111, offsetY + 94, offsetX + 111, offsetY + 102);
ctx.lineTo(offsetX + 111, offsetY + 116);
ctx.fill();

// Ojos blancos
ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(offsetX + 91, offsetY + 101, 5, 0, Math.PI * 2);
ctx.arc(offsetX + 103, offsetY + 101, 5, 0, Math.PI * 2);
ctx.fill();

// Pupilas
ctx.fillStyle = "black";
ctx.beginPath();
ctx.arc(offsetX + 91, offsetY + 101, 2, 0, Math.PI * 2);
ctx.arc(offsetX + 103, offsetY + 101, 2, 0, Math.PI * 2);
ctx.fill();

// Punto inicial centrado
const startX = 100;   // mueve izquierda/derecha si quieres
const startY = 260;   // altura de la segunda línea
const space = 90;     // espacio entre figuras
const radius = 35;

for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 3; j++) {

    ctx.beginPath();

    const x = startX + j * space;
    const y = startY + i * space;

    const startAngle = 0;
    const endAngle = Math.PI + (Math.PI * j) / 2;
    const counterclockwise = i % 2 !== 0;

    ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);

    if (i > 1) {
      ctx.fill();
    } else {
      ctx.stroke();
    }
    }
  }
}

window.onload = function () {
  draw();

  const btn = document.getElementById("btnRedraw");
  if (btn) {
    btn.addEventListener("click", draw);
  }
};
function roundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x, y + radius);
  ctx.arcTo(x, y + height, x + radius, y + height, radius);
  ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
  ctx.arcTo(x + width, y, x + width - radius, y, radius);
  ctx.arcTo(x, y, x, y + radius, radius);
  ctx.stroke();
}