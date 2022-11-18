const visitsDisplay = document.querySelector(".visits");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);
// show todays date.
todayDisplay.textContent = Date.now();

/////////////////////////////////// NUMBER OF VISITS JS///////////////////////
/////////// LAST VISIT JS//////////////

letdayBefore=localStorage.getItem('date');


localStorage.setItem('date',day);

dayBefore=Date.parse(dayBefore);

constnumber_mSdayS=(day-dayBefore)/86400000;


if(!number_mSdayS){
    constnumDaysN=document.querySelector("#lastVisit");
    if(numDaysN){numDaysN.textContent=0;}
}

else{
    constnumDaysY=document.querySelector("#lastVisit");
    if(numDaysY)numDaysY.textContent=number_mSdayS.toFixed(0);
}
