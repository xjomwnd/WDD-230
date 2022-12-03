///////////////////////////////////////////////////////////////////////////////////////
const member = document.querySelector('.memberName');
if (member) {
    member.textContent = `${localStorage.getItem('firstName')} ${localStorage.getItem('lastName')}`;
    localStorage.removeItem('firstName');
    localStorage.removeItem('lastName'); }

const emailMember = document.querySelector('.emailConfirmation');
if (emailMember) {
    emailMember.textContent = localStorage.getItem('emailM');
    localStorage.removeItem('emailM'); }

const phoneMember = document.querySelector('.phoneMember');
if (phoneMember) {
    phoneMember.textContent = localStorage.getItem('phoneM');
    localStorage.removeItem('phoneM'); }

// Directory
const displayDirectory = (dataDirectory) => {
    dataDirectory.companies.forEach ( 
        company => {
        let card = document.createElement('section');
        let logo = document.createElement('img');
        let name = document.createElement('h4');
        let address = document.createElement('p');
        let phoneNumber = document.createElement('p');
        let a = document.createElement('a');
        let link = document.createTextNode(company.URL);
        a.appendChild(link);
        a.href = 'https://github.com/xjomwnd/WDD-230-1/blob/main/Lesson09/directory/json/data.json';
        a.target = '_blank';
        name.textContent = company.name;
        logo.setAttribute('src', company.image);
        logo.setAttribute('alt', `Photo of ${company.name}`);
        address.textContent = company.address;
        phoneNumber.textContent = company.phoneNumber;
        card.appendChild(name);
        card.appendChild(logo);
        card.appendChild(address);
        card.appendChild(phoneNumber);
        card.appendChild(a);
        const cards = document.querySelector('.gridArticle');
        if (cards) { cards.appendChild(card); }
      }
    )
  }

// Spotlight
function shuffleCompanies(companies) {
  let currentIndex = companies.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = companies[currentIndex];
    companies[currentIndex] = companies[randomIndex];
    companies[randomIndex] = temporaryValue;
  } return companies;
}

function displaySpotlight(company,numberSpotlight) {
    let card = document.createElement('section');
    let logo = document.createElement('img');
    let address = document.createElement('p');
    let phoneNumber = document.createElement('p');
    let a = document.createElement('a');
    let link = document.createTextNode('WebSite');
    a.appendChild(link);
    a.href='https://github.com/xjomwnd/WDD-230-1/blob/main/Lesson09/directory/json/data.json';
    a.target = '_blank';
    logo.setAttribute('src', company.image);
    logo.setAttribute('alt', `Photo of ${company.name}`);
    logo.setAttribute('loading', 'lazy');
    address.textContent = company.address;
    phoneNumber.textContent = company.phoneNumber;
    card.appendChild(logo);
    card.appendChild(address);
    card.appendChild(phoneNumber);
    card.appendChild(a);
    document.querySelector(`.spotlight${numberSpotlight}`).appendChild(card);}

const shuffleSpotlight = (dataSpotlight) => {
  const filterCompanies = dataSpotlight.companies.filter (( company ) => 
        company.membershipLevel == 1 || company.membershipLevel == 2);
        let filterCompaniesShuffle = shuffleCompanies(filterCompanies);
        for (let i=0; i<3; i++) {
          if (filterCompaniesShuffle[i]) {
            displaySpotlight(filterCompaniesShuffle[i], i+1);
          }    
        }
}
        
async function getDirectory() {
    const response = await fetch("./json/data.json");
    if (response.ok) {
      let data = await response.json();
      if (dir) {displayDirectory(data); }
      if (spotL) {shuffleSpotlight(data); } 
    }
  }
  const dir = document.querySelector('.menuDirectory');
  const spotL = document.querySelector('.spotlight');
  if (dir || spotL) { getDirectory(); }

// GridList
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
/////////////////////////////////////////////////////////////////////////////////////////*/
/*///////////////////////////////////////////////////////////////////
const requestURL='https://xjomwnd.github.io/WDD-230-1/main/Lesson09/data.json';

document.addEventListener("DOMContentLoaded",()=>{
    fetch(requestURL)
    .then(function(response){
        returnresponse.json();
    })
    .then(function(jsonObject){
        companies=jsonObject['companies'];
        companies.forEach(displayCompanies);
    });
});

functiondisplayCompanies(company){

    constshops=document.querySelector('#directory-list');

    letli=document.createElement("li");
    leth4=document.createElement("h4");
    letp1=document.createElement("p");
    letp2=document.createElement("p");
    leta=document.createElement("a");

    li.setAttribute("class","company");

    h4.innerText=company.name;
    p1.innerText=company.address;
    p2.innerText=company.phone;
    a.innerText=company.site;

    li.append(h4);
    li.append(p1);
    li.append(p2);
    li.append(a);

    shops.append(li);
}
const displayDirectory = (dataDirectory) => {
    dataDirectory.companies.forEach ( 
        company => {
        let card = document.createElement('section');
        let name = document.createElement('h3');
        let logo = document.createElement('img');
        let address = document.createElement('p');
        let phoneNumber = document.createElement('p');

        let a = document.createElement('a');
        let link = document.createTextNode(company.URL);
        a.appendChild(link);
        a.href = 'https://xjomwnd.github.io/WDD-230-1/Lesson09/directory/directory.html'

        name.textContent = company.name;

        logo.setAttribute('src', company.image);
        logo.setAttribute('alt', `Photo of ${company.name}`);
        logo.setAttribute('loading', 'lazy');
  
        address.textContent = company.address;
        phoneNumber.textContent = company.phoneNumber;
      
        card.appendChild(name);
        card.appendChild(logo);
        card.appendChild(address);
        card.appendChild(phoneNumber);
        card.appendChild(a);
  
        document.querySelector('.gridArticle').appendChild(card);
      }
    )
  }
  
async function getDirectory() {
    const response = await fetch("./json/data.json");
  
    if (response.ok) {
      let data = await response.json();
      console.log(data);
      displayDirectory(data);
    }
  }
  
  const dir = document.querySelector('.menuDirectory');
  if (dir) {
    getDirectory();
  }



// ///////////////////// //
//      GRID - LIST      //
// ///////////////////// //

const gridbutton = document.querySelector("#grid");

if (gridbutton) {

  const listbutton = document.querySelector("#list");
  const display = document.querySelector(".gridArticle");

  gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
  });

  listbutton.addEventListener("click", showList); 

  function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
  }
}
//////////////////////////////////////////////////////////////////////*/