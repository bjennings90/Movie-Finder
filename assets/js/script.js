
// Use a CSS framework other than Bootstrap.

// Be deployed to GitHub Pages.

// Be interactive (i.e: accept and respond to user input).

// Use at least two server-side APIs.

// Does not use alerts, confirms, or prompts (use modals).

// Use client-side storage to store persistent data.

// Be responsive.

// Have a polished UI.

// Have a clean repository that meets quality coding standards (file structure, naming conventions, follows best practices for class/id-naming conventions, indentation, quality comments, etc.).

// Have a quality README (with unique name, description, technologies used, screenshot, and link to deployed application).


let listener;
// This is the comedy movie display 
function displayMovies(genre) {
    let movieUrl ='https://imdb-api.com/API/AdvancedSearch/k_a62fqwzy?title_type=feature,tv_movie&count=100&genres=' + genre
    fetch(movieUrl)
        .then(response => response.json())
        .then(data => {
            window.localStorage.setItem('Movies', JSON.stringify(data));
            displayNextTwelve(0);
        });
}


function displayNextTwelve(start){
    clearGrid();
    let dataStorage = window.localStorage.getItem('Movies');
    let data = JSON.parse(dataStorage);

    for (let i = start; i < start + 12; i++) {
        let image = data.results[i].image;
        let title = data.results[i].title; 
        let year = data.results[i].description;
        let genres = data.results[i].genres;
        let rating = data.results[i].imDbRating;
        let plot = data.results[i].plot;

        createMovieElement(title, year, genres, rating, plot, image); 
    }
    // Alter event listener for display next 12 button with correct offset
    if (listener != null) {
        document.getElementById('next-btn').removeEventListener("click", listener);
    }
    listener = () => displayNextTwelve(start+12);
    document.getElementById("next-btn").addEventListener("click", listener);
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

    movieName.textContent = title + " " + year;
    genreElement.textContent = genres;
    moviePlot.textContent = plot;
    movieRating.textContent = "Rating: " + rating + " out of 10";   
    moviePoster.src = image;
    
}


// This function will show the selected movie genre when the user chooses it from the drop down menu
function chooseGenre() {
    let genreType = document.getElementById("select-emoji");
    let genreChoice = genreType.value;

    switch(genreChoice) {
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
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


document.getElementById('mood-btn').addEventListener("click", () => chooseGenre());