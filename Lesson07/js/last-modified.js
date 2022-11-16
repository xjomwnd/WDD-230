document.querySelector(".date").textContent=newIntl.DateTimeFormat("en-UK",{dateStyle: "full"}).format(newDate());

document.querySelector('#year').textContent=newDate().getFullYear();
document.querySelector('#lastupdated').textContent=`Last Modification: ${document.lastModified}`;


