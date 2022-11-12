

const requestURL = 'https://github.com/xjomwnd/WDD-230-1/blob/main/Lesson09/data.json';
const list = document.querySelector('#list');
const table = document.querySelector('.table');
const grid = document.querySelector('#grid');
const cards = document.querySelector('.cards');
const displayItems = document.querySelector('.displayItems');


async function getData(requestURL) {
    const response = await fetch(requestURL);
    if (response.ok) {
        const data = await response.json();
        // console.log(data);
        const businesses = data['businesses'];

        businesses.forEach(business => {
            displayCards(business);
        });
        
        list.addEventListener('click', () => {
            table.innerHTML = '';
            cards.innerHTML = '';
            businesses.forEach(business => {
                displayTable(business);
            });
        });

        grid.addEventListener('click', () => {
            table.innerHTML = '';
            cards.innerHTML = '';
            businesses.forEach(business => {
                displayCards(business);
            });
        });
    }
}

getData(requestURL);

function displayCards(business) {
    let card = document.createElement('section');

    // Business Image
    let image = document.createElement('img');
    image.setAttribute('src', business.logo);
    image.setAttribute('alt', `${business.name} Logo`);
    card.appendChild(image);
    
    // Business Name
    let h2 = document.createElement('h2');
    h2.textContent = business.name;
    card.appendChild(h2);

    // Business Type
    let type = document.createElement('p');
    type.textContent = business.type;
    card.appendChild(type);

    // Business Address
    let address = document.createElement('p');
    address.textContent = business.location.address1 + ' ' + ' ' + business.location.city + ', ' + business.location.state + ' ' + business.location.zip_code;
    card.appendChild(address);

    // Business Phone
    let phone = document.createElement('p');
    phone.textContent = business.phone;
    card.appendChild(phone);

    // Business Website
    let website = document.createElement('a');
    website.setAttribute('href', business.website);
    website.textContent = 'Website';
    card.appendChild(website);

    // Append card to the DOM (the prophet list).
    document.querySelector('div.cards').appendChild(card);
}

function displayTable(business) {
    let tableRow = document.createElement('tr');

    // Business Name
    let name = document.createElement('td');
    name.textContent = business.name;
    tableRow.appendChild(name);

    // Business Type
    let type = document.createElement('td');
    type.textContent = business.type;
    tableRow.appendChild(type);

    // Business Address
    let address = document.createElement('td');
    address.textContent = business.location.address1 + ' ' + ' ' + business.location.city + ', ' + business.location.state + ' ' + business.location.zip_code;
    tableRow.appendChild(address);

    // Business Phone
    let phone = document.createElement('td');
    phone.textContent = business.phone;
    tableRow.appendChild(phone);

    // Business Website
    let website = document.createElement('td');
    website.innerHTML = `<a href="${business.website}">Website</a>`;
    tableRow.appendChild(website);

    document.querySelector('table').appendChild(tableRow);
}



///////////////////////////////////////////////////////////////////////////
/*
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}
*/

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

/*
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
  */