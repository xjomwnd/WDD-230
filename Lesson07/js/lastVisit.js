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