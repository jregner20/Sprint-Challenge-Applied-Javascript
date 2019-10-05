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

axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then(response => {
    console.log(response);
    articleComp(response.data);
});

function articleComp(obj){
     
    // create elements

    const card = document.createElement('div');
    const artHead = document.createElement('div');
    const author = document.createElement('div');
    const imgCont = document.createElement('div');
    const image = document.createElement('img');
    const authName = document.createElement('span');

    // create structure

    card.appendChild(artHead);
    card.appendChild(author);
    author.appendChild(imgCont);
    imgCont.appendChild(image);
    author.appendChild(authName);

    // create classes

    card.classList.add('card');
    artHead.classList.add('headline');
    author.classList.add('author');
    imgCont.classList.add('img-container');

    // create content

    artHead.textContent = obj.headline;
    image.src = obj.authorPhoto;
    authName.textContent = `by ${obj.authorName}`;
    // console.log(obj);

    return card;

}

const blob = document.querySelector(".cards-container");

axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
        const art = response.data.articles;
        console.log(art);
        for (let i in art){
            art[i].forEach(element => {
                blob.appendChild(articleComp(element));
            })
        }
    })