import { listOfMovies } from "../app.js";

export class SearchList {
  constructor() {
    this.searchedMovies = [];
  }
  filterList() {
    const searchingTitle = document.querySelector(".searching-movie-title");

    if (searchingTitle.value.trim() === "" || listOfMovies.length === 0) {
      searchingTitle.value = "";
      alert("Enter a valid movie title.");
      return;
    }
    listOfMovies.filter((movie) => {
      let { movieTitle } = movie;
      if (movieTitle.includes(searchingTitle.value.trim())) {
        this.searchedMovies.push(movie);
        this.appendToDOM();
      } else {
        alert("Enter a valid movie title.");
        searchingTitle.value = "";
        return;
      }
    });
  }
  appendToDOM() {
    this.searchedMovies.forEach((movie) => {
      let { movieTitle, genre, rating } = movie;
      let element = `${movieTitle} : ${genre} | ${rating}`;
      let listItem = document.createElement("li");
      listItem.textContent = element;
      const ul = document.querySelector(".searched-list");
      const searchingTitle = document.querySelector(".searching-movie-title");
      ul.append(listItem);
      listItem.scrollIntoView({ behavior: 'smooth' });

      listItem.addEventListener("click", () => {
        ul.removeChild(listItem);
      });
      searchingTitle.value = "";
    });
  }
}
