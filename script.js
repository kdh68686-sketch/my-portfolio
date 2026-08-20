// 다크 모드
const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark");
});


// 자세히 보기
const detailButton = document.querySelector(".detailButton");
const detailText = document.querySelector(".detailText");

detailButton.addEventListener("click", function () {
    if (detailText.hasAttribute("hidden")) {
        detailText.removeAttribute("hidden");
        detailButton.textContent = "접기";
    } else {
        detailText.setAttribute("hidden", "");
        detailButton.textContent = "자세히 보기";
    }
});
