
const requestURL='https://carlassaraf.github.io/wdd230/href="https://prestonchamber.org/business-directory/';

document.addEventListener("DOMContentLoaded", () => {
    fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        companies= jsonObject['companies'];
        companies.forEach(displayCompanies);
    });
});

function displayCompanies(company) {

    const shops = document.querySelector('#directory-list');

    let li = document.createElement("li");
    let h4 = document.createElement("h4");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let a = document.createElement("a");

    li.setAttribute("class", "company");

    h4.innerText = company.name;
    p1.innerText = company.address;
    p2.innerText = company.phone;
    a.innerText = company.site;

    li.append(h4);
    li.append(p1);
    li.append(p2);
    li.append(a);

    shops.append(li);
}

/*
const webtask_url = `https://wt-8081b26e05bb4354f7d65ffc34cbbd67-0.sandbox.auth0-extend.com/data-machine`;

const setColor = (color) => {
  document.body.style.backgroundColor = color;
}

const ajaxer = (color) => {
  let url = webtask_url;
  if (color) url += `?color=` + encodeURIComponent(color);
  fetch(url)
    .then(response => response.json())
    .then(data => {
      setColor(data.color);
      if (!color) input.value = data.color;
    });
}

// set color upfront
ajaxer();

const input = document.querySelector("input");
input.addEventListener("input", function() {
  setColor(input.value);
  ajaxer(input.value);
})
*/