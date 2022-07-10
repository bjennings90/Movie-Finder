// var moviePosters = items[Math.floor(Math.random()*12.length)];
// var movie0 = document.getElementById("movie-0");
// var movie1 = document.getElementById("movie-1");
// var movie2 = document.getElementById("movie-2");
// var movie3 = document.getElementById("movie-3");
// var movie4 = document.getElementById("movie-4");
// var movie5 = document.getElementById("movie-5");
// var movie6 = document.getElementById("movie-6");
// var movie7 = document.getElementById("movie-7");
// var movie8 = document.getElementById("movie-8");
// var movie9 = document.getElementById("movie-9");
// var movie10 = document.getElementById("movie-10");
// var movie11 = document.getElementById("movie-11");
var allPosters = document.querySelector("#thumbnail-grid");

var url = "https://imdb-api.com/en/API/Top250Movies/k_2si393kp";
console.log(url);


function getMovies() {
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    // if we see a CORS error, we can’t use that API!
    console.log(data);
    moviePosters(data);
    
  });
}

function moviePosters(data) {
  for (var i = 0; i < data.length; i++) {
    // var image = document.createElement("img");
    // var title = document.createElement("h5");
    // var genre = document.createElement("h6");
    // var description = document.createElement("p");
    // var rating = document.createElement("p");
    image.setAttribute("src", data.items[i].image);
    title.textContent = data.items[i].title;
    genre.textContent = data.items[i].genre;
    description.textContent = data.items[i].description;
    rating.textContent = data.items[i].rating;

    allPosters.append(image);
  }
}

  function createMovieEl() {
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

  //   document.querySelector("#zero").setAttribute("src",data.items[i].image);
  //   console.log(data.items[i]);



var img = document.querySelector("#zero");
console.log(img);

document.getElementById("mood-btn").addEventListener("click", function () {
console.log("click")
createMovieEl();
getMovies()

});
