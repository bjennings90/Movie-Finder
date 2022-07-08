// var moviePosters = items[Math.floor(Math.random()*12.length)];

function postersApi(event) {
    event.preventDefault();
    var url = 'https://imdb-api.com/en/API/Top250Movies/k_2si393kp';
                console.log(url);
                fetch(url)
                  .then((response) => response.json())
                  .then((data) => {
                    // if we see a CORS error, we can’t use that API!
                    // console.log(data);
                  });

//  function moviePosters(data) {
//  movie0.
  };