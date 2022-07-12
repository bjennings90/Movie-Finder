// fetch this for random
var quoteUrl = "https://movie-quote-api.herokuapp.com/v1/quote?censored";

let forwardListener;
let backwardListener;
// This is the comedy movie display
function displayMovies(genre) {
  let movieUrl =
    "https://imdb-api.com/API/AdvancedSearch/k_5mdou5db?title_type=feature,tv_movie&count=100&genres=" +
    genre;
  fetch(movieUrl)
    .then((response) => response.json())
    .then((data) => {
      window.localStorage.setItem("Movies", JSON.stringify(data));
      displayTwelve(0);
    });
}

function displayTwelve(start) {
  clearGrid();
  let dataStorage = window.localStorage.getItem("Movies");
  let data = JSON.parse(dataStorage);
  if (!data || !data.results) return;
  for (let i = start; i < start + 12; i++) {
    let image = data.results[i].image.replace(/\/original\//g, "/170x250/");
    // console.log(image);
    let title = data.results[i].title;
    let year = data.results[i].description;
    let genres = data.results[i].genres;
    let rating = data.results[i].imDbRating;
    let plot = data.results[i].plot;

    createMovieElement(title, year, genres, rating, plot, image);
  }
  if (start === 0) {
    document.getElementById("previous-btn").style.display = "none";
  } else {
    document.getElementById("previous-btn").style.display = "block";
  }

  // Alter event listener for display next 12 button with correct offset
  if (forwardListener != null) {
    document
      .getElementById("next-btn")
      .removeEventListener("click", forwardListener);
  }
  forwardListener = () => displayTwelve(start + 12);
  document
    .getElementById("next-btn")
    .addEventListener("click", forwardListener);

  if (backwardListener != null) {
    document
      .getElementById("previous-btn")
      .removeEventListener("click", backwardListener);
  }
  backwardListener = () => displayTwelve(start - 12);
  document
    .getElementById("previous-btn")
    .addEventListener("click", backwardListener);
}

// creating elements for the Genre movie selection
function createMovieElement(title, year, genres, rating, plot, image) {
  // Elements for the first div/ movie poster image
  let mainDiv = document.getElementById("poster-column");
  let colThumbnail = document.createElement("div");
  let imgElement = document.createElement("span");
  let moviePoster = document.createElement("img");
  // Elements for the second div/ movie information
  let content = document.createElement("div");
  let movieName = document.createElement("h5");
  let genreElement = document.createElement("h6");
  let moviePlot = document.createElement("p");
  let movieRating = document.createElement("p");

  // Recreating the movie card HTML format
  colThumbnail.appendChild(imgElement);
  imgElement.appendChild(moviePoster);
  colThumbnail.appendChild(content);
  content.appendChild(movieName);
  content.appendChild(genreElement);
  content.appendChild(moviePlot);
  content.appendChild(movieRating);
  mainDiv.appendChild(colThumbnail);

  colThumbnail.setAttribute("class", "col thumbnail");
  imgElement.setAttribute("class", "img-element");
  content.setAttribute("class", "content");
  movieName.setAttribute("class", "title");
  genreElement.setAttribute("class", "genre");
  moviePlot.setAttribute("class", "description");
  movieRating.setAttribute("class", "rating");

  movieName.textContent = title + " " + year;
  genreElement.textContent = genres;
  moviePlot.textContent = plot || "There is no description for this movie.";
  movieRating.textContent = rating
    ? "Rating: " + rating + " out of 10"
    : "No rating for this movie.";
  moviePoster.src = image;
}

// This function will show the selected movie genre when the user chooses it from the drop down menu
function chooseGenre() {
  let genreType = document.getElementById("select-emoji");
  let genreChoice = genreType.value;

  switch (genreChoice) {
    case "comedy":
      displayMovies("comedy");
      break;
    case "drama":
      displayMovies("drama");
      break;
    case "romance":
      displayMovies("romance");
      break;
    case "sci-fi":
      displayMovies("sci_fi");
      break;
    case "horror":
      displayMovies("horror");
      break;
    case "action":
      displayMovies("action");
      break;
    case "family":
      displayMovies("family");
      break;
    case "documentaries":
      displayMovies("documentary");
      break;
  }
}
// resets the page when needed.
function clearGrid() {
  let parent = document.getElementById("poster-column");
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

document
  .getElementById("mood-btn")
  .addEventListener("click", () => chooseGenre());

// get random quote function targeting the H1 "quote" class:
function getRandomQuote(data) {
  var randomQuote = document.querySelector("#random-element");
  var quote = document.querySelector(".quote");
  quote.innerText = '"' + data.quote + '"' + "  - " + data.show;
  console.log(data);
  randomQuote.quote;

  for (var i = 1; i <= data.length; i++) {
    getRandomQuote(quoteArray[i]);
  }
}
var onQuoteClick = function () {
  var quoteUrl = "https://movie-quote-api.herokuapp.com/v1/quote?censored=true";
  fetch(quoteUrl)
    .then((response) => response.json())
    .then((data) => {
      if (data.show === "The Wire") {
        onQuoteClick();
      } else {
        getRandomQuote(data);
      }
    });
  console.log("action");
};

// fetch random quote using URL:
document
  .querySelector(".random-quote-btn")
  .addEventListener("click", onQuoteClick);

displayMovies("action");
