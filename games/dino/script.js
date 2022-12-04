function jump() {
  if (character.class != "animate") {
    character.classList.add("animate");
    setInterval(() => {
      character.classList.remove("animate");
    }, 500);
  }
}

const checkDead = setInterval(() => {
  const characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  const blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );
  if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
    // block.style.animation = "none";
    // alert("lose!");
  }
}, 10);
