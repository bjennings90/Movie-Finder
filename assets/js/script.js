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
var allPosters = document.querySelector("#all-posters");

    var url = "https://imdb-api.com/en/API/Top250Movies/k_2si393kp";
                console.log(url);
                fetch(url)
                  .then((response) => response.json())
                  .then((data) => {
                    // if we see a CORS error, we can’t use that API!
                    console.log(data);
                    moviePosters(data)
                  });

  function moviePosters(data) {
    for (var i = 0; i < data.length; i++) {
        var image = document.createElement("img");
        var title = document.createElement("h5");
        var genre = document.createElement("h6");
        var description = document.createElement("p");
        var rating = document.createElement("p");
      image.setAttribute("src",data.items[i].image);  
      title.textContent = data.items[i].title;
      genre.textContent = data.items[i].genre;
      description.textContent = data.items[i].description;
      rating.textContent = data.items[i].rating;  

      allPosters.append(image);
    }
//   document.querySelector("#zero").setAttribute("src",data.items[i].image);
//   console.log(data.items[i]);
  
  }
  var img = document.querySelector("#zero");
  console.log(img);