const cube = document.getElementById("cube");
const moveBy = 10;
const Lshape = document.getElementById("Lshape");
window.addEventListener("load", () => {
  cube.style.position = "absolute";
  cube.style.left = 0;
  cube.style.top = 0;
});
window.addEventListener("load", () => {
  Lshape.style.position = "absolute";
  Lshape.style.left = 0;
  Lshape.style.top = 0;
});

window.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "ArrowLeft":
      cube.style.left = parseInt(cube.style.left) - moveBy + "px";
      break;
    case "ArrowRight":
      cube.style.left = parseInt(cube.style.left) + moveBy + "px";
      break;
    case "ArrowUp":
      cube.style.top = parseInt(cube.style.top) - moveBy + "px";
      break;
    case "ArrowDown":
      cube.style.top = parseInt(cube.style.top) + moveBy + "px";
      break;
  }
});
window.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "ArrowLeft":
      Lshape.style.left = parseInt(Lshape.style.left) - moveBy + "px";
      break;
    case "ArrowRight":
      Lshape.style.left = parseInt(Lshape.style.left) + moveBy + "px";
      break;
    case "ArrowUp":
      Lshape.style.top = parseInt(Lshape.style.top) - moveBy + "px";
      break;
    case "ArrowDown":
      Lshape.style.top = parseInt(Lshape.style.top) + moveBy + "px";
      break;
  }
});
function Update() {
  if (Input.GetKey(KeyCode.A))
    transform.Rotate(Vector3.up * speed * Time.deltaTime);

  if (Input.GetKey(KeyCode.D))
    transform.Rotate(-Vector3.up * speed * Time.deltaTime);
}
