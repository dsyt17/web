const upBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button");
const sidebar = document.querySelector(".sidebar");
const mainSlide = document.querySelector(".main-slide");
const container = document.querySelector(".container");
const slidesCount = mainSlide.querySelectorAll("div").length;

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

let activeSlideIndex = 0;

upBtn.addEventListener("click", () => {
  changeSlide("up");
});

downBtn.addEventListener("click", () => {
  changeSlide("down");
});

document.addEventListener("keydown", (event) => {
  // if (event.key === "ArrowUp") {
  //   changeSlide("up");
  // } else if (event.key === "ArrowDown") {
  //   changeSlide("down");
  // }
  switch (event.key) {
    case "ArrowUp":
      changeSlide("up");
      break;

    case "ArrowDown":
      changeSlide("down");
      break;
  }
});

function changeSlide(direction) {
  if (direction === "up") {
    activeSlideIndex++;
    activeSlideIndex === slidesCount && (activeSlideIndex = 0);
  } else if (direction === "down") {
    activeSlideIndex--;
    activeSlideIndex < 0 && (activeSlideIndex = slidesCount - 1);
  }

  const height = container.clientHeight;

  mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;

  sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}
