const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.lineCap = 'round';
ctx.globalCompositeOperation = 'luminosity'

let lineWidth = 10;
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;

function draw(e){
    if(!isDrawing) return;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.lineWidth = lineWidth;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY)
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY]
    hue++;
    lineWidth++;
    if(lineWidth >= 150){
        lineWidth = 50;
    }
}

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY]
})
canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mouseout', () => isDrawing = false)
canvas.addEventListener('mouseup', () => isDrawing = false)