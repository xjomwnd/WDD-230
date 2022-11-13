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
//////////////////////////////////////////////////////////////////////*/
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
        a.href = '#'

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
Footer
