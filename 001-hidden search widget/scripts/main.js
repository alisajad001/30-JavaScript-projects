const inputElem = document.querySelector(".input");
const searchBtn = document.querySelector(".search-btn");
const searchIcon = document.querySelector("span");
const container = document.querySelector(".container");


const openInput = () => {
    inputElem.classList.add("active");
    inputElem.focus();
    searchIcon.classList.add("active");
};

searchBtn.addEventListener("click", openInput);

const closeInput = () => {
    inputElem.classList.remove("active");
    searchIcon.classList.remove("active");
}

document.addEventListener("click", (e) => {
    if (!container.contains(e.target)) {
        closeInput();
    }
});