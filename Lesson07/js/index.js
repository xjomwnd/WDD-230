// Select the HTML element to manipulate
const date1 = document.querySelector("#date1");
// Try to complete the method with options
try {
	const options = {
		weekday: "long",
		day: "numeric",
		month: "long",
		year: "numeric"
	};
	date1.textContent = new Date().toLocaleDateString("en-UK", options);
} catch (e) {
	alert("Error with code or your browser does not support Locale");
}

// Long hand method ... building day and month names from built-in date methods.

const daynames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];
const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];
const d = new Date();
const dayName = daynames[d.getDay()];
const monthName = months[d.getMonth()];
const year = d.getFullYear();
const fulldate = `${dayName}, ${d.getDate()} ${monthName} ${year}`;
document.querySelector("#date2").textContent = fulldate;


/*==========================DATE.JS================LAZY LOAD=========================*/
function preloadImage(img) {
    const src = img.getAttribute("data-src");
    if(!src) {
        return;
    }

    img.src = src;
    img.removeAttribute("data-src");
}

document.addEventListener("DOMContentLoaded", () => {
  
    const images = document.querySelectorAll("[data-src]");

    const imgOptions = {
        threshold: 0,
        rootMargin: "0px 0px -50px 0px"
    };

    const imgObserver = new IntersectionObserver( (entries, imgObserver) => {

        entries.forEach(entry => {

            if(!entry.isIntersecting) {
                return;
            } else {
                preloadImage(entry.target);
                imgObserver.unobserve(entry.target);
            }

        });

    }, imgOptions);

    images.forEach(image => {
        imgObserver.observe(image);
    });

});
/*=====================================END LAZY LOAD JS=================================*/
