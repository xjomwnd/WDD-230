const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");


if (gridbutton || listbutton) {

  const display = document.querySelector(".gridArticle");

  gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
  });

  listbutton.addEventListener("click", () => {
    display.classList.add("list");
    display.classList.remove("grid");
  });

}