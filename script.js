const button = document.getElementById("themeButton");

button.addEventListener("click", function () {
    document.body.classList.toggle("dark");
});


const detailButton = document.querySelector(".detailButton");
const detailText = document.querySelector(".detailText");

detailButton.addEventListener("click", function () {
    detailText.hidden = !detailText.hidden;

    if (detailText.hidden) {
        detailButton.textContent = "자세히 보기";
    } else {
        detailButton.textContent = "접기";
    }
});
