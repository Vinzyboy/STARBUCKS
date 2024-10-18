const dropDowns = document.querySelectorAll("h4");

dropDowns.forEach((dropDown) => {
    dropDown.addEventListener("click", () => {
        dropDown.nextElementSibling.classList.toggle("open");
        dropDown.querySelector("i").classList.toggle("open");
    })
})