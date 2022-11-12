/////////////////////////////////////////////////////////////////
let dayBefore = localStorage.getItem('date');

localStorage.setItem('date', day);

dayBefore = Date.parse(dayBefore);

const number_mSdayS = (day - dayBefore)/86400000;


if (!number_mSdayS) {
    const numDaysN = document.querySelector("#lastVisit");
    if (numDaysN) { numDaysN.textContent = 0; }
}

else {
    const numDaysY = document.querySelector("#lastVisit");
    if (numDaysY) numDaysY.textContent = number_mSdayS.toFixed(0);
}

///////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////
let lastVisited = window.localStorage.getItem("lastVisited");
let lastVisitedDisplay = document.querySelector("#lastVisited");
if (lastVisited) {
    let days = Math.round((Date.now() - lastVisited)/1);
    lastVisitedDisplay.textContent = `You visited this page ${days} days ago.`;
} else {
    lastVisitedDisplay.textContent = `You visited this page for the first time today.`;
}
///////////////////////////////////////////////////////////////////

