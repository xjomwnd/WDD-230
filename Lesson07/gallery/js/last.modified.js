document.querySelector(
	"#lastModified"
).textContent = `Last Modification: ${document.lastModified}`;


/* =================== last-modfied.js large ====plus the==== copyright.js========================== */
/* ==================copyright year================= */
let lastModified = new Date(document.lastModified);
let fullDate = lastModified.toLocaleString('en-US', {month: "2-digit", day: "2-digit", year: "numeric"});
let time = lastModified.toLocaleString('en-GB', {hour: "2-digit", minute: "2-digit", second: "2-digit"});
document.querySelector(".date").textContent=newIntl.DateTimeFormat("en-UK",{dateStyle: "full"}).format(newDate());

document.querySelector('#year').textContent=newDate().getFullYear();
document.querySelector('#lastupdated').textContent=`Last Modification: ${document.lastModified}`;


