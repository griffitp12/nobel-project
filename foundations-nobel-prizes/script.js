'use strict'
// Please don't delete the 'use strict' line above

// Title of Webpage
const title = document.createElement("h1");
// Set attributes for title
title.classList.add("title");
title.classList.add("text");
title.innerText = "Nobel Prize Winners";
// Append title
document.body.appendChild(title);

// Populate page with data
const prizes = nobels.prizes;

for (const prize of prizes) {
  // Create year
  let createYear = document.createElement("h2");
  // Set attributes for years
  createYear.classList.add("year");
  createYear.classList.add("text");
  createYear.innerText = prize.year;
  // Append Years
  document.body.appendChild(createYear);

  // create category div
  let categoryDiv = document.createElement("div");
  categoryDiv.classList.add("categoryDiv");
  document.body.appendChild(categoryDiv);

  // Create category
  let createCategory = document.createElement("h3");
  // Set attributes for categories
  createCategory.classList.add("category");
  createCategory.classList.add("text");
  createCategory.innerText = `~~${prize.category}~~`;
  // Append Categories
  categoryDiv.appendChild(createCategory);
  
  // Create Laureate & Motivation
  const Laureates = prize.laureates;
  for (const laureate of Laureates){
    let createLaureate = document.createElement("h4");
    let createMotivation = document.createElement("p");
    // Set attributes for Laureates
    createLaureate.classList.add("name");
    createLaureate.classList.add("text");
    createLaureate.innerText = `${laureate.firstname} ${laureate.surname}`;
    // Set attributes for Motivations
    createMotivation.classList.add("motivation");
    createMotivation.classList.add("text");
    createMotivation.innerText =  laureate.motivation;
    // Append Laureates and Motivations
    categoryDiv.appendChild(createLaureate);
    categoryDiv.appendChild(createMotivation);
  }
  
}

// Stylesheet


const years = document.getElementsByClassName("year");
const categories = document.getElementsByClassName("category");
const names = document.getElementsByClassName("name");
const motivations = document.getElementsByClassName("motivation");
const text = document.getElementsByClassName("text");
const categoryDivs = document.getElementsByClassName("categoryDiv");

document.body.style.backgroundColor = "#164A41"

title.style.textAlign = "center";
title.style.color = "#F1B24A";
title.style.fontSize = "70px";
title.style.letterSpacing = "2px";
title.style.fontWeight = "400";
title.style.fontVariant = "small-caps";

for (const year of years) {
  year.style.textAlign = "center";
  year.style.color = "#4D774E";
}

for (const category of categories){
  category.style.textAlign = "center";
  category.style.textTransform = "uppercase";
  category.style.fontSize = "20px";
  category.style.letterSpacing = "2px";
  category.style.fontWeight = "400";
  category.style.fontVariant = "small-caps";
}

for (const name of names){
  name.style.textAlign = "center";
}

for (const motivation of motivations){
  motivation.style.textAlign = "center";
}

for (const element of text) {
  element.style.fontFamily = "Helvetica";
}

for (const div of categoryDivs) {
  div.style.boxShadow = "5px 5px 15px 5px #000000";
  div.style.padding = "5px"
  div.style.marginLeft = "10em"
  div.style.marginRight = "10em"
  div.style.backgroundColor = "#9DC88D"
}


