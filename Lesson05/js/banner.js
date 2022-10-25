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
