console.clear();

const movie = {
  title: "The Dark Knight",
  director: "Christopher Nolan",
  actors: "Christian Bale, Heath Ledger, Aaron Eckhart",
  year: 2008,
  category: "Action",
  poster: "http://image.tmdb.org/t/p/w500//qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  rating: 9,
  description:
    "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice."
};

function createPosterElement(poster) {
  const element = document.createElement("img");
  element.src = poster;
  element.className = "movie-poster";
  return element;
}

function createTitleElement(title) {
  const element = document.createElement("div");
  element.className = "movie-title";
  element.textContent = title;
  return element;
}

function createDataElement(rating, year) {
  const element = document.createElement("div");
  element.className = "movie-data";
  element.textContent = `Rating: ${rating} | ${year}`;
  return element;
}

function createButton() {
    const element = document.createElement("div");
    element.id = "movie-data-hide";
    element.textContent = "Hide Data";

    element.addEventListener("click", hideData);

    return element;
}

function hideData() {
    const movieDataContainer = document.querySelector("#movie-data-container");
    const movieButton = document.querySelector("#movie-data-hide");
    movieDataContainer.toggleAttribute("hidden");

    const isHidden = movieDataContainer.hasAttribute("hidden");
    movieButton.textContent = isHidden ? "Show Data" : "Hide Data";

}


function createMovieElement(movieObj) {
  const movieElement = document.createElement("div");
  movieElement.className = "movie";
  movieElement.appendChild(createPosterElement(movieObj.poster));
  movieElement.appendChild(createButton());
  
  const movieDataContainer = document.createElement("div");
  movieDataContainer.id = 'movie-data-container';
  movieDataContainer.appendChild(createTitleElement(movieObj.title));
  movieDataContainer.appendChild(createDataElement(movieObj.rating, movieObj.year));
  
  movieElement.appendChild(movieDataContainer);
  return movieElement;
}

const movieContainer = document.createElement("div");
movieContainer.className = "movie-container";

const movieElement = createMovieElement(movie);
movieContainer.appendChild(movieElement);

document.body.appendChild(movieContainer);

