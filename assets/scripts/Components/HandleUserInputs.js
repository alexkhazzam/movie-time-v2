import { listOfMovies } from "../app.js";

export class HandleUserInputs {
  constructor() {
    this.movieList = document.querySelector(".movie-list");
    this.movie = {};
    this.fetchInputs();
    this.appendToDOM();
  }
  fetchInputs() {
    const movieTitle = document.querySelector(".movie-title");
    const movieGenre = document.querySelector(".movie-genre");
    const movieRating = document.querySelector(".movie-rating");

    if (
      movieTitle.value.trim() === "" ||
      movieGenre.value.trim() === "" ||
      movieRating.value.trim() === ""
    ) {
        alert("Enter a valid movie title, genre and rating.");
      return;
    } else {
      this.movieTitle = movieTitle.value.trim();
      this.movieGenre = movieGenre.value.trim();
      this.movieRating = movieRating.value.trim();

      this.movie = {
        movieTitle: this.movieTitle,
        genre: this.movieGenre,
        rating: this.movieRating,
      };
    }
  }
  appendToDOM() {
    const movieTitle = document.querySelector(".movie-title");
    const movieGenre = document.querySelector(".movie-genre");
    const movieRating = document.querySelector(".movie-rating");

    if (movieTitle.value.trim() === "" || movieGenre.value.trim() === "" || movieRating.value.trim() === "") {
        return;
    } else if (movieRating.value.trim() > 5 || movieRating.value.trim() < 0) {
        alert("Enter a rating that is > 0 and < 5");
        movieTitle.value = "";
        movieGenre.value = "";
        movieRating.value = "";
        return;
    }else {
        let listItem = `${this.movieTitle} : ${this.movieGenre} | ${this.movieRating}`;
        let movieElement = document.createElement("li");
        movieElement.id = Math.random();
        movieElement.textContent = listItem;
        this.movieList.append(movieElement);
        movieElement.scrollIntoView({ behavior: 'smooth' });
        listOfMovies.push(this.movie);

        movieElement.addEventListener("click", () => {
          this.movieList.removeChild(movieElement);
          let index = listOfMovies.indexOf(movieElement);
          listOfMovies.splice(index, 1);
          window.localStorage.removeItem(window.localStorage.key(movieElement.id));
        });
    
        movieTitle.value = "";
        movieGenre.value = "";
        movieRating.value = "";
      }
    }
}
