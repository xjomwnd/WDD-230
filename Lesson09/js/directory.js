/*
const requestURL='https://github.com/xjomwnd/WDD-230-1/blob/main/Lesson09/data.json';
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
*/
const displayDirectory = (dataDirectory) => {
    dataDirectory.companies.forEach ( 
        company => {
        let card = document.createElement('section');
        let name = document.createElement('h3');
        let logo = document.createElement('img');
        let address = document.createElement('p');
        let phoneNumber = document.createElement('p');
        let URL = document.createElement('p');

        name.textContent = `${company.name}`;

        logo.setAttribute('src', company.image);
        logo.setAttribute('alt', `Photo of ${company.name}`);
        logo.setAttribute('loading', 'lazy');
  
        address.textContent = `${company.address}`;
        phoneNumber.textContent = `${company.phoneNumber}`;
        URL.textContent = `${company.URL}`;
      
        card.appendChild(name);
        card.appendChild(logo);
        card.appendChild(address);
        card.appendChild(phoneNumber);
        card.appendChild(URL);
  
        document.querySelector('.gridArticle').appendChild(card);
      }
    )
  }