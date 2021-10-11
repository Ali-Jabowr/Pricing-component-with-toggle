const checkbox = document.querySelector("[name='checkbox']"),
      total = document.querySelectorAll(".card .total"),
      toggle = document.querySelector(".toggle");

let annual = [199.99, 244.99, 339.99];
let monthly = [19.99, 24.99, 39.99];

checkbox.onclick = validate

function validate() {
  if (checkbox.checked) {
    for(i in total){
      total[i].innerHTML = `<span>&dollar;</span> ${monthly[i]}`
    }
  } else {
    for(i in total){
      total[i].innerHTML = `<span>&dollar;</span> ${annual[i]}`
    }
  }
}
