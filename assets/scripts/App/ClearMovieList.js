import { listOfMovies } from "../app.js";

export class ClearMovieList {
    constructor() {
        this.searchedList = document.querySelector(".searched-list");
        this.movieList = document.querySelector(".movie-list");
    }
    clearList() {
        listOfMovies.length = 0;
        this.movieList.textContent = "";
        this.searchedList.textContent = "";
        window.localStorage.clear();
    }
    clearSearchedList() {
        this.searchedList.textContent = "";
    }
}