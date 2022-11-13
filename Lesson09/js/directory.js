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