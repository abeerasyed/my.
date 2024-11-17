// Simple Canvas Drawing Feature for Kids
const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');
let drawing = false;

// Start drawing
canvas.addEventListener('mousedown', () => {
  drawing = true;
});

// Stop drawing
canvas.addEventListener('mouseup', () => {
  drawing = false;
  ctx.beginPath();
});

// Draw
canvas.addEventListener('mousemove', (event) => {
  if (!drawing) return;

  ctx.lineWidth = 5;
  ctx.lineCap = 'round';
  ctx.strokeStyle = '#ff4e50';

  ctx.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
});
