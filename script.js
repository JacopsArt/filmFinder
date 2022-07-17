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
    //open link in new tab
    aTag.setAttribute("target", "_blank");
  });
}

addMoviesToDom(movies);

//search input
function searchInput() {
  const inputField = document.getElementById("filterInput");

  // add eventlistener
  inputField.addEventListener("keyup", (e) => {
    // empty list
    addRemove();
    // define search value
    const searchString = e.target.value;
    // filter through movie titles
    const filteredTitles = movies.filter((i) =>
      i.title.toLowerCase().includes(searchString)
    );
    addMoviesToDom(filteredTitles);
  });
}
searchInput();

//function handleOnChangeEvent
function handleOnChangeEvent() {
  document.getElementsByName("filter").forEach((i) => {
    i.addEventListener("change", (event) => {
      switch (event.target.value) {
        case (id = "latest-movies"):
          addRemove();
          const filterLatestMovies = movies.filter(
            (movies) => movies.year > 2014
          );
          addMoviesToDom(filterLatestMovies);
          console.log(filterLatestMovies);
          break;
        case (id = "avenger-movies"):
          addRemove();
          filterAvenger = movies.filter((i) =>
            i.title.toLowerCase().includes("avenger")
          );
          addMoviesToDom(filterAvenger);
          console.log(filterAvenger);
          break;
        case (id = "x-men-movies"):
          addRemove();
          filterXMen = movies.filter((i) =>
            i.title.toLowerCase().includes("x-men")
          );
          addMoviesToDom(filterXMen);
          console.log(filterXMen);
          break;
        case (id = "princess-movies"):
          addRemove();
          filterPrincess = movies.filter((i) =>
            i.title.toLowerCase().includes("princess")
          );
          addMoviesToDom(filterPrincess);
          console.log(filterPrincess);
          break;
        case (id = "batman-movies"):
          addRemove();
          filterBatman = movies.filter((i) =>
            i.title.toLowerCase().includes("batman")
          );
          addMoviesToDom(filterBatman);
          console.log(filterBatman);
          break;
        default:
          addMoviesToDom(movies);
      }
    });
  });
}

handleOnChangeEvent(movies);

// function to remove movies from list before adding
function addRemove() {
  const movieList = document.querySelectorAll("li");
  console.log("emptying");
  console.log("filtered movielist", movieList);
  movieList.forEach((element) => element.remove());
}
