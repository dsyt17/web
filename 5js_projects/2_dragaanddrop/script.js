const item = document.querySelector(".item");
const placeholders = document.querySelectorAll(".placeholder");

item.addEventListener("dragstart", dragstart);

item.addEventListener("dragend", dragend);

placeholders.forEach((elem) => {
  elem.addEventListener("dragover", dragover);
  elem.addEventListener("dragenter", dragenter);
  elem.addEventListener("dragleave", dragleave);
  elem.addEventListener("drop", dragdrop);
});

function dragstart(event) {
  //   console.log("drag start");
  event.target.classList.add("hold");
  setTimeout(() => event.target.classList.add("hide"), 0);

  placeholders.forEach((elem) => (elem.className = "whenhover"));
}

function dragend(event) {
  //   event.target.classList.remove("hold", "hide");
  event.target.className = "item";
  placeholders.forEach((elem) => elem.classList.remove("whenhover"));
}

function dragover(event) {
  event.preventDefault();
}

function dragenter(event) {
  event.target.classList.add("hovered");
}

function dragleave(event) {
  event.target.classList.remove("hovered");
}

function dragdrop(event) {
  event.target.append(item);
  event.target.classList.remove("hovered");
}
