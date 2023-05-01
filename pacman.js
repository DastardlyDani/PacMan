var pos = 0;
let pageWidth = 800;
const pacArray = [
  ["Pacman 1.png", "Pacman 2.png"],
  ["Pacman 3.png", "Pacman 4.png"],
];
var direction = 0;
var focus = 0;

function Run() {
  let img = document.getElementById("PacMan");
  let imgWidth = img.width;
  focus = (focus + 1) % 2;
  direction = checkPageBounds(direction, imgWidth, pos, pageWidth);
  img.src = pacArray[direction][focus];
  if (direction) {
    pos -= 40;
    img.style.left = pos + "px";
  } else {
    pos += 40;
    img.style.left = pos + "px";
  }
}
setInterval(Run, 150);

function checkPageBounds(direction, imgWidth, pos, pageWidth) {
  if (direction == 0 && pos + imgWidth > pageWidth) direction = 1;
  if (direction == 1 && pos < 0) direction = 0;

  return direction;
}

module.exports = {checkPageBounds};
