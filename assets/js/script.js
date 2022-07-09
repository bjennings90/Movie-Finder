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



// Looks up the streaming services for UTELLY
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'a758775ba6mshcc29d7a6d54b17cp1c01a6jsnafa198b33208',
        'X-RapidAPI-Host': 'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com'
    }
};


// Let Variables for the streaming service function
let searchMovie = document.getElementById('search-input');
let searchMovieButton = document.getElementById('search-movie-name');

//Shows the movie plot and rating information
function showPlot() {
let movieDescription = 'https://imdb-api.com/en/API/SearchMovie/k_a62fqwzy/' + searchMovie.value
fetch(movieDescription)
    .then(response => response.json())
    .then(data => console.log(data));

    console.log(movieDescription);
};

// this will be the main function that will display all the information about the movie
function displayDescription(id) {
    'https://imdb-api.com/en/API/Title/k_a62fqwzy/' + id + '/Ratings'
    response.plot // shows the movie plot, needs to be linked to a variable and HTML
    response.ratings.imDb // shows IMDB's rating of the movie, needs to be linked ot a variable and HTML
}



// Utelly streamign services look up. 
function streamingServiceLookUp() {
var streamingSite = 'https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=' + searchMovie.value; 
fetch(streamingSite, options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
    console.log (streamingSite);
}


function streamingService(data) {
    = "Streaming Service:" + data.locations[0].display_name // need to add in a variable name and link it to the HTML
}

// Search button name, when clicked it should bring up the movie. 
searchMovieButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    streamingServiceLookUp();
    showPlot('tt10872600');
});