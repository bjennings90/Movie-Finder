
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

// Variables that link to the HTML documentation

let moodBtn = document.getElementById('mood-btn');
let title = document.getElementsByClassName('title');
let genre = document.getElementsByClassName('genre');
let plot = document.getElementsByClassName('description');
let rating = document.getElementsByClassName('rating-number');

//Shows the movie plot and rating information
function showPlot() {
let movieDescription = 'https://imdb-api.com/en/API/SearchMovie/k_a62fqwzy/' +
fetch(movieDescription)
    .then(response => response.json())
    .then(data => console.log(data));

    console.log(movieDescription);
};

// this will be the main function that will display all the information about the movie
function displayDescription(id) {
     'https://imdb-api.com/en/API/Title/k_a62fqwzy/' + id + '/Ratings'
    plot[1].innerText = response.plot // shows the movie plot, needs to be linked to a variable and HTML
    response.ratings.imDb // shows IMDB's rating of the movie, needs to be linked ot a variable and HTML

}

// creating elements for the Genre movie selection
function createMovieElement() {
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
    mainDiv.appendChild(colThumbnail);
    colThumbnail.appendChild(imgElement);
    imgElement.appendChild(moviePoster);
    colThumbnail.appendChild(content);
    content.appendChild(movieName);
    content.appendChild(genreElement);
    content.appendChild(moviePlot);
    content.appendChild(movieRating);

    colThumbnail.setAttribute("class", "col thumbnail");
    imgElement.setAttribute("class", "img-element");
    content.setAttribute("class", "content");
    movieName.setAttribute("class", "title");
    genreElement.setAttribute("class", "genre");
    moviePlot.setAttribute("class", "description");
    movieRating.setAttribute("class", "rating");

    
    
}


// Create a for loop so that it shows 12 movies per page


// resets the page when needed. 
function clearGrid() {
    let parent = document.getElementById("poster-column");
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}



moodBtn.onLoad(() => {
    showPlot();
    displayDescription();
});
