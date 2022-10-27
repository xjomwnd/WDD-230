let day = date.getDay();
day = 1;

if (day == 1 || day == 2) {
    let banner = document.querySelector('.banner');
    banner.style.display = 'block';

    document.querySelector(".banner-button").addEventListener("click", function () {
        banner.style.display = 'none';
      });
} else {
    let banner = document.querySelector('.banner');
    banner.style.display = 'none';
}


/*======================banner.js===============================*/
const weekday = new Date().setDate();
if (weekday == 1) {
    document.querySelector('.banner').style.display = "block";
}
if (weekday == 2) {
    document.querySelector('.banner').style.display = "block";
}

*====================BANNER JS===================================*/
document.querySelector(".date").textContent = new Intl.DateTimeFormat("en-UK", { dateStyle: "full" }).format(new Date());

document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#lastupdated').textContent = `Last Modification: ${document.lastModified}`;


// ///////////// //
// Banner JoinUs //
// ///////////// //

const day = new Date();
const today = day.getDay();

if (today < 1 || today > 2) {
    const banner = document.querySelector('.joinUs');
    banner.remove();
} 