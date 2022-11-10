/*
let dayBefore = localStorage.getItem('date');

localStorage.setItem('date', day);

dayBefore = Date.parse(dayBefore);

const number_mSdayS = (day - dayBefore)/86400000;


if (!number_mSdayS) {
    document.querySelector("#lastVisit").textContent = 0
}
else {
    document.querySelector("#lastVisit").textContent = number_mSdayS.toFixed(0);
}
*/

/* ////////////////// lastVisit-js ////////////////////// */
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
