const date = new Date();
const day = today.getDay();
const banner = document.getElementById("banner");

if (day == 1 || day == 2) {
    banner.textContent = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m"
} else {
    banner.remove();
}