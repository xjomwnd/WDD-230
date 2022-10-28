    let date = new Date();

    if(date.getDay() == 1 || date.getDay() == 2) {

        let header = document.querySelector("header");
        let banner = document.createElement("h3");
        banner.innerText = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m";
        banner.setAttribute("id", "join-banner");
    }