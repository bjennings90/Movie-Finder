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

// API IMDB Title for plot information

// //Shows the movie plot and rating information
// var movieDescription = 'https://imdb-api.com/en/API/Title/k_a62fqwzy/tt1375666/Ratings,Wikipedia'
// fetch(movieDescription)
//     .then(response => response.text())
//     .then(data => console.log(data));

//     console.log(movieDescription);

// Let Variables
let searchMovie = document.getElementById('user-bar');
let searchMovieButton = document.getElementById('search-movie-name');

// Looks up the streaming service 
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'a758775ba6mshcc29d7a6d54b17cp1c01a6jsnafa198b33208',
        'X-RapidAPI-Host': 'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com'
    }
};

function streamingServiceLookUp() {
var streamingSite = 'https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=' + searchMovie.value; 
fetch(streamingSite, options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
    console.log (streamingSite);
}


function streamingService() {

}

searchMovieButton.addEventListener('click', (evt) => {
    streamingServiceLookUp();

});