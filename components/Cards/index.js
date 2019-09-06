// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

//* Selectors
const cardContainer = document.querySelector('.cards-container')

function CreateCards(data) {

//* Create Component
const card = document.createElement('div')
const headline = document.createElement('div')
const author = document.createElement('div')
const imgContainer = document.createElement('div')
const image = document.createElement('img')
const authorsName = document.createElement('span')

//* Data
headline.textContent = `${data.headline}`;
image.src = `${data.authorPhoto}`;
authorsName.textContent = `By ${data.authorName}`;

//* Classes
card.classList.add("card");
headline.classList.add("headline");
author.classList.add("author");
imgContainer.classList.add("img-container");

//* Append Children
card.appendChild(headline);
card.appendChild(author);
author.appendChild(imgContainer);
imgContainer.appendChild(image);
card.appendChild(authorsName);
return card
}

// //* GET REQUEST
axios.get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    console.log(response.data);
    response.data.articles.bootstrap.forEach(article => {
        cardContainer.appendChild(CreateCards(article))
    });
    response.data.articles.javascript.forEach(article => {
        cardContainer.appendChild(CreateCards(article))
    });
    response.data.articles.jquery.forEach(article => {
        cardContainer.appendChild(CreateCards(article))
    });
    response.data.articles.technology.forEach(article => {
        cardContainer.appendChild(CreateCards(article))
    });
  })
  .catch(error => {
    console.log("The data was not returned", error);
  });