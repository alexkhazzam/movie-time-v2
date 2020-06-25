import { listOfMovies} from "../app.js";

export class RenderStorage {
  constructor() {
    this.movieListItems = document.querySelectorAll("li");
    this.movieList = document.querySelector(".movie-list");
  }
  appendListItemsToStorage() {
    if (this.movieListItems.length === 0) {
      return;
    } else {
      this.movieListItems.forEach((listItem) => {
        if (listItem.parentElement !== this.movieList) {
          return;
        } else {
          window.localStorage.setItem(
            listItem.id,
            JSON.stringify(listItem.textContent)
          );
        }
      });
    }
  }
  fetchPreviousListItems() {
    let archive = [];

    if (window.localStorage.length === 0) {
      return;
    } else {
      for (let i = 0; i <= window.localStorage.length; i++) {
        archive.push(
          JSON.parse(window.localStorage.getItem(localStorage.key(i)))
        );
      }
      archive.forEach((movieElement) => {
        let li = document.createElement("li");
        li.textContent = movieElement;
        if (li.textContent === "") {
          return;
        } else {
          this.movieList.append(li);
          li.scrollIntoView({ behavior: 'smooth' });
          li.addEventListener("click", () => {
            window.localStorage.removeItem(window.localStorage.key(li.id));
            this.movieList.removeChild(li);
          });
        }
      });
    }
  }
}
