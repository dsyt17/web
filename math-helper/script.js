let i1 = document.querySelector(".n1");
let i2 = document.querySelector(".n2");

function getRes() {
  const result = Number(i1.value) + Number(i2.value);
  document.querySelector(".res").textContent = result;
  console.log(result);
}

document.querySelector(".btn").onclick = getRes;
