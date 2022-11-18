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
