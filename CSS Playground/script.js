document.addEventListener("DOMContentLoaded", function () {
    var openPopupButton = document.getElementById("openPopup");
    var popup = document.getElementById("popup");
    var closePopupButton = document.getElementById("closePopup");

    openPopupButton.addEventListener("click", function () {
        popup.style.display = "block";
    });

    closePopupButton.addEventListener("click", function () {
        popup.style.display = "none";
    });
});
