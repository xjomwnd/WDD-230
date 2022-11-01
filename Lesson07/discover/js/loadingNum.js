let loadingNum = 0;
const loadingElement = document.getElementById("loading-num");
const loadingBlurElement = document.getElementById("loading-blur");

let interval = setInterval(() => {
  loadingNum++;
  update(loadingNum);

  if (loadingNum >= 100) clearInterval(interval);
}, 20);

function update(num) {
  loadingElement.innerHTML = `${num}%`;
  loadingElement.style.opacity = `${1 - num / 100}`;
  loadingBlurElement.style.filter = `blur(${10 - num / 10}px)`;
}
