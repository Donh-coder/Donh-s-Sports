/* Home */
const home_button = document.getElementById("home_but",);
home_button.addEventListener("click", function () {
    home_button.classList.add("clicked");
    setTimeout(() => {
        home_button.classList.remove("clicked");
    }, 500);
});