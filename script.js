const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

/* Selected all the classes and buttons which we want to control through js. */

let currentActive = 1; /* currentActive is the variable, that we will be comparing to the number of circles. */

next.addEventListener("click", () => {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  update(); /* update is the function, which is going to be active with each click on the buttons pre and next. */
});

prev.addEventListener("click", () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});

function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  }); /* with each click of button the active class is going to be added or removed. */

  const actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 +
    "%"; /* the blue line is going to work with this formula, just like 33% width for the first click and so on. */

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
  /* buttons are going to be disabled or enabled by this logic */
}
