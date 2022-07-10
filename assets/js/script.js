
var quoteUrl = "https://movie-quote-api.herokuapp.com/v1/quote?censored"; // fetch this for random
var allPosters = document.querySelector("#thumbnail-grid");
var quoteArray = [1];
var movieUrl = "https://imdb-api.com/en/API/Top250Movies/k_z6yhwe7s";


// var url = "https://imdb-api.com/en/API/Top250Movies/k_z6yhwe7s"; 
//       console.log(url);
//       fetch(url)
//       .then((response) => response.json())
//       .then((data) => {
//       console.log(data);
//         moviePosters(data)
//     });

  // function moviePosters(data) {
  //   for (var i = 0; i < data.length; i++) {
  //       var image = document.createElement("img");
  //       var title = document.createElement("h5");
  //       var genre = document.createElement("h6");
  //       var description = document.createElement("p");
  //       var rating = document.createElement("p");
  //     image.setAttribute("src", data.items[i].image);  
  //     title.textContent = data.items[i].title;
  //     genre.textContent = data.items[i].genre;
  //     description.textContent = data.items[i].description;
  //     rating.textContent = data.items[i].rating;  

  //     allPosters.append(image);
  //   }
    
//   document.querySelector("#zero").setAttribute("src",data.items[i].image);
//   console.log(data.items[i]);
  
  // }
  // var img = document.querySelector("#zero");
  // console.log(img);



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

// fetch random quote using URL:
  document.querySelector(".random-quote-btn").addEventListener("click", function() {
    var quoteUrl = "https://movie-quote-api.herokuapp.com/v1/quote?censored=true"; 
    fetch(quoteUrl)
      .then((response) => response.json())
      .then((data) => {
        getRandomQuote(data);
      });
      console.log("click");
  });

