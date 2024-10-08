// script.js (Main Branch)
document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("header");
    header.textContent = "I love working at iServiceWeb";

    const changeImageBtn = document.getElementById("changeImageBtn");
    const picture = document.getElementById("picture");

    const image1 = "assets/hey.png";
    const image2 = "assets/thumbs.png";

    changeImageBtn.addEventListener("click", function () {
        if (picture.src.includes(image1)) {
            picture.src = image2;
            picture.alt = "New Picture";
        } else {
            picture.src = image1;
            picture.alt = "Your Picture";
        }
    });
});
