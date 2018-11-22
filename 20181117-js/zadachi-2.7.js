const left = document.querySelector("#left");
const right = document.querySelector("#right");
const items = document.querySelector("#items");
const computed = getComputedStyle(items);
const step = parseInt(getComputedStyle(items.firstElementChild).width);
const size = items.children.length - 3;
const maxRight = step * size;

const minRight = 0;

let currentRight = 0;

items.style.right = currentRight;


right.addEventListener("click", function(e) {
 e.preventDefault();

 if (currentRight < maxRight) {
  currentRight += step;
  items.style.right = currentRight + "px";
}  else {
  currentRight = 0;
  items.style.right = 0;
}
});


left.addEventListener("click", function() {
  if (currentRight > minRight) {
    currentRight -= step;
    items.style.right = currentRight + "px";
  } else {
      currentRight = maxRight;
      items.style.right = currentRight + "px";
    }
});

