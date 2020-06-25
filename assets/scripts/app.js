import { HandleUserInputs } from "./Components/HandleUserInputs.js";
import { SearchList } from "./App/SearchList.js";
import { RenderStorage } from "./Components/RenderStorage.js";
import { ClearMovieList } from "./App/ClearMovieList.js";

export let listOfMovies = [];

class App {
    fetchClasses() {
        const handleUserInput = new HandleUserInputs(); 
        const renderStorage = new RenderStorage();
        renderStorage.appendListItemsToStorage();
    }
    searchMovie() {
        const searchList = new SearchList();
        searchList.filterList();
    }
    clearSearched() {
        const clearMovieList = new ClearMovieList();
        clearMovieList.clearSearchedList();
    }
    clearMovieList() {
        const clearMovieList = new ClearMovieList();
        clearMovieList.clearList();
    }
}

const submitMovieInfo = document.querySelector(".submit-movie-information");
const app = new App();
submitMovieInfo.addEventListener("click", () => {
    app.fetchClasses();
})

const searchedList = document.querySelector(".submit-movie-search");
const app1 = new App();
searchedList.addEventListener("click", () => {
    app1.searchMovie();
});

const movieGenre = document.querySelector(".movie-genre");
movieGenre.value = "";

const clearSearched = document.querySelector(".clear-searched");
const app2 = new App();
clearSearched.addEventListener("click", () => {
    app2.clearSearched();
})

const clearMovies = document.querySelector(".clear-movies");
const app3 = new App();
clearMovies.addEventListener("click", () => {
    app3.clearMovieList();
})

const renderStorage = new RenderStorage();
renderStorage.fetchPreviousListItems();