
var quoteUrl = "https://movie-quote-api.herokuapp.com/v1/quote?censored"; // fetch this for random
//key: k_6fj2w74m
// test comment

let forwardListener;
let backwardListener;

let genreIdToNameMap = new Map();
let genreNameToIdMap = new Map();

// This is the comedy movie display 
function displayMovies(genreType) {
    let genreMovieUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=e500078a0f3e60374b44f445454ec0aa&with_genres=' + genreType + '&page=';
    let genreAPIMap = 'https://api.themoviedb.org/3/genre/movie/list?api_key=e500078a0f3e60374b44f445454ec0aa';
    let mainPageMovieUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=e500078a0f3e60374b44f445454ec0aa&&page=';
    fetch(genreAPIMap)
        .then(response => response.json())
        .then(data => genreTable(JSON.stringify(data)));

    if (genreType === null) {
        getMovieData(1, mainPageMovieUrl);
    } else {
        getMovieData(1, genreMovieUrl);
    }
};    


function genreTable(dataStorage) {
    let data = JSON.parse(dataStorage);
    if (!data) return
    for (let i = 0; i < data.genres.length ; i++) {
        let genreId = data.genres[i].id;
        let genreName = data.genres[i].name;

        genreIdToNameMap.set(genreId, genreName);
        genreNameToIdMap.set(genreName.toLowerCase(), genreId);
    }
    console.log(genreIdToNameMap);
    console.log(genreNameToIdMap);
}

function getMovieData(page, url) {
    return fetch(url + page)
        .then(response => response.json())
        .then(response => displayPage(page, url, response));
    
}

function displayPage(pageNumber, url, data) {
    clearGrid();
    if (!data || !data.results) return
    for (let i = 0; i < data.results.length; i++) {
        let image = 'https://image.tmdb.org/t/p/w300' + data.results[i].poster_path.replace(/\/original\//g, "/170x250/");
        let title = data.results[i].title; 
        let year = data.results[i].release_date.substr(0,4);
        let genres = data.results[i].genre_ids;
        let genreNames = [];
        for (let j = 0; j < genres.length; j++) { 
            genreNames.push(genreIdToNameMap.get(genres[j]));
        }
 
        let rating = data.results[i].vote_average;
        let plot = data.results[i].overview;

        createMovieElement(title, year, genreNames, rating, plot, image); 
    }

    if (pageNumber === 1 ) {
        document.getElementById("previous-btn").style.display = "none";
    } else {
        document.getElementById("previous-btn").style.display = "block";
    }

    // moves the button forward one page or back one page
    if (forwardListener != null) {
        document.getElementById('next-btn').removeEventListener("click", forwardListener);
    }
    forwardListener = () => getMovieData(pageNumber + 1, url);
    document.getElementById("next-btn").addEventListener("click", forwardListener);

    if (backwardListener != null) {
        document.getElementById("previous-btn").removeEventListener("click", backwardListener);        
    }
    backwardListener = () => getMovieData(pageNumber - 1, url);
    document.getElementById("previous-btn").addEventListener("click", backwardListener);
}



// creating elements for the Genre movie selection
function createMovieElement(title, year, genres, rating, plot, image) {
    // Elements for the first div/ movie poster image 
    let mainDiv = document.getElementById('poster-column');
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


    movieName.textContent = title + " " + "(" +  year + ")";
    genreElement.textContent = genres;
    moviePlot.textContent = plot || "There is no description for this movie.";
    movieRating.textContent = rating? "Rating: " + rating + " out of 10": ("No rating for this movie.");
    moviePoster.src = image;

    
}


// This function will show the selected movie genre when the user chooses it from the drop down menu
function chooseGenre() {
    let genreType = document.getElementById("select-emoji").value;
    displayMovies(genreNameToIdMap.get(genreType));
}

// resets the page when needed. 
function clearGrid() {
    let parent = document.getElementById("poster-column");
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

document.getElementById('mood-btn').addEventListener("click", () => chooseGenre());

// get random quote function targeting the H1 "quote" class:
  function getRandomQuote(data) {
    var randomQuote = document.querySelector("#random-element");
    var quote = document.querySelector(".quote");
      quote.innerText = '"' + data.quote + '"' + '  - ' + data.show;
      console.log(data);
      randomQuote.quote;
      
    for (var i = 1; i <= data.length; i++) {
      getRandomQuote(quoteArray[i]);
    }
  }
var onQuoteClick = function() {
    var quoteUrl = "https://movie-quote-api.herokuapp.com/v1/quote?censored=true"; 
    fetch(quoteUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.show === "The Wire") {
            onQuoteClick()
        } else {
            getRandomQuote(data);
        }
      });
      console.log("action");
  }
  
// fetch random quote using URL:
  document.querySelector(".random-quote-btn").addEventListener("click", onQuoteClick);

  displayMovies();

