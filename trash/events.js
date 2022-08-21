let table = document.getElementById("bagua-table");

let selectedTd;

table.onclick = function (event) {
  let target = event.target;

  while (target != this) {
    if (target.tagName == "TD") {
      highlight(target);
      return;
    }
    target = target.parentNode;
  }
};

function highlight(node) {
  if (selectedTd) {
    selectedTd.classList.remove("highlight");
  }
  selectedTd = node;
  selectedTd.classList.add("highlight");
}

document.addEventListener("click", function (event) {
  if (event.target.dataset.counter != undefined) {
    // если есть атрибут...
    event.target.value++;
  }
});

document.addEventListener("click", function (event) {
  let id = event.target.dataset.toggleId;
  if (!id) return;

  let elem = document.getElementById(id);

  elem.hidden = !elem.hidden;
});

containeree.onclick = function (event) {
  console.log(event.target.className);
  if (event.target.className != "remove-button") return;

  let pane = event.target.closest(".pane");
  pane.remove();
};
