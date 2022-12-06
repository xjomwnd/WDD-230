const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

document.addEventListener("DOMContentLoaded", () => {

    fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        const prophets = jsonObject['drinks'];
        prophets.forEach(displayProphets);
    });
});

function displayProphets(drink) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
  
    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${drink.name} ${drink.lastname}`;
  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    let order = [
        "1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th",
        "10th", "11th", "12th", "13th", "14th", "15th", "16th", "17th"
    ]

    portrait.setAttribute('src', drink.imageurl);
    portrait.setAttribute('alt', `Portait of ${drink.name} ${drink.lastname} - ${order[drink.order]}`);
    portrait.setAttribute('loading', 'lazy');
  
    /* Append paragraphs */
    p1.innerText = `Date of birth: ${drink.birthdate}`;
    p2.innerText = `Place of birth: ${drink.birthplace}`;

    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(portrait);
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  }
