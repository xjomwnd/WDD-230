const date = new Date();
const day = today.getDay();
const banner = document.getElementById("banner");

if (day == 1 || day == 2) {
    banner.textContent = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m"
} else {
    banner.remove();
}




/* ============================================================ */
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