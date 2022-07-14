//const e = require("express");

// "convert" movies to li
const ulTag = document.getElementById("movieList");

function addMoviesToDom(movies) {
  // log posters
  movies.map((n) => "<img>" + n.poster + "</img>");
  //create li for each movie
  movies.forEach((e) => {
    //create li
    let liTag = document.createElement("li");
    // create a
    let aTag = document.createElement("a");
    //create img
    let listImg = document.createElement("img");
    //append children
    ulTag.appendChild(liTag);
    liTag.appendChild(aTag);
    aTag.appendChild(listImg);
    listImg.appendChild(document.createTextNode(e.poster));
    aTag.href = "https://www.imdb.com/title/" + e.imdbID;
    //set source img
    listImg.src = e.poster;
  });
};

addMoviesToDom(movies);





//function handleOnChangeEvent("change", )
function handleOnChangeEvent() {
  document.getElementsByName("filter", handleRadioClick).forEach((i) => {
    i.addEventListener("change", (event) => {


      switch (event.target.value) {
        case (id = "latest-movies"):
          filterLatestMovies = movies
            .filter((movies) => movies.year > 2014);
          addMoviesToDom(filterLatestMovies);
          console.log(filterLatestMovies);
          
          //empty();
          break;
        case (id = "avenger-movies"):
          filterAvenger = movies
            .filter((i) => i.title.toLowerCase().includes("avenger"))   
          addMoviesToDom(filterAvenger);
          console.log(filterAvenger);
          addRemove()
          //empty();
          break;
        case (id = "x-men-movies"):
          filterXMen = movies
            .filter((i) => i.title.toLowerCase().includes("x-men"))
          addMoviesToDom(filterXMen);
          console.log(filterXMen);
          //empty();
          addRemove()
          break;
        case (id = "princess-movies"):
          filterPrincess = movies
            .filter((i) => i.title.toLowerCase().includes("princess"))
          addMoviesToDom(filterPrincess);
          console.log(filterPrincess);
          addRemove()
          //empty();
          break;
        case (id = "batman-movies"):
          filterBatman = movies
            .filter((i) => i.title.toLowerCase().includes("batman"))
          addMoviesToDom(filterBatman);
          console.log(filterBatman);
          addRemove()
          //empty();
          break;
        default:
          console.log(addMoviesToDom(movies));
      }
    });
  });
}

handleOnChangeEvent(movies)

function addRemove() {
  const movieList = document.querySelectorAll("img");
  console.log("emptying");
  //console.log("Movielist",movieList)
  movieList.forEach((img) => img.appendChild());
  while (movieList.firstChild) {
    console.log("removing");
    movieList.removeChild(movieList.firstChild);
  }
}


  function empty() {
    const movieList = document.querySelectorAll("poster");
    console.log("emptying");
    movieList.forEach((element) => element.remove());
    while (movieList.firstChild) {
      console.log("removing");
      movieList.removeChild(movieList.firstChild);
    }
  }

// function addRemove() {
//   if (document.getElementsByName('filter').checked) {
//     box.style.display = 'block';
//   } else {
//     box.style.display = 'none';
//   }
// }

// function handleRadioClick() {

//   //document.addEventListener("DOMContentLoaded", handler);

//   if (document.getElementsByName('filter').checked) {
    
//     //box.style.display = 'block';
//   } else {
//     //box.style.display = 'none';
//   }
// }