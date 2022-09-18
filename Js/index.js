//Guardar el elemento y el contexto
const mCanvas = document.getElementById("canvas");
const context = mCanvas.getContext("2d");
let x;
let y;

const dibujar = (cX, cY) => {

  context.beginPath();
  context.moveTo(x, y);
  context.lineWidth = 15;
  context.strokeStyle = "#000";
  context.lineCap = "round";
  context.lineJoin = "round";
  context.lineTo(cX, cY);
  context.stroke();

  x = cX;
  y = cY;

};

const mouseDown = (evt) => {

  x = evt.offsetX;
  y = evt.offsetY;
  dibujar(x, y);
  mCanvas.addEventListener("mousemove", mouseMoving);

};

const mouseMoving = (evt) => { dibujar(evt.offsetX, evt.offsetY); };

const mouseUp = () => { mCanvas.removeEventListener("mousemove", mouseMoving); };

mCanvas.addEventListener("mousedown", mouseDown);
mCanvas.addEventListener("mouseup", mouseUp);
