// SELECTING ELEMENTS

const cube = document.querySelector(".image-cube");
const btnNext = document.querySelector("#next");
const prevBtn = document.querySelector("#prev");

// JAVSCRIPT DEFINE VARIBLES
let pos = 0;

// Functions
// Image forward
const transLateForward = (sign) => {
  pos += +`${sign}90`;
  console.log(pos);
  cube.style.transform = `rotateY(${pos}deg)`;
};

document.addEventListener("keyup", (e) => {
  if (e.key === "ArrowRight") {
    transLateForward("-");
  }
});
document.addEventListener("keyup", (e) => {
  if (e.key === "ArrowLeft") {
    transLateForward("+");
  }
});

// const moveForward = () => {

// }

// EventListeners
btnNext.addEventListener("click", (e) => {
  console.log(e.target);
  transLateForward("-");
});
prevBtn.addEventListener("click", (e) => {
  console.log(e.target);
  transLateForward("+");
});

// Calling functions
