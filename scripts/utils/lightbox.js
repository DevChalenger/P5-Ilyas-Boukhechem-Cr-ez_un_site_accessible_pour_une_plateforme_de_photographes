const main = document.getElementById("main");
const lightbox = document.getElementById("lightbox-section");
function displayLightbox() {
  lightbox.style.display = "block";
  main.ariaHidden = "true";
  main.style.display = "none";
}
function closeLightbox() {
  let getAllArticle = document.querySelectorAll(".lightbox-container");
  getAllArticle.forEach((article) => {
    article.classList.remove("displayed-block");
  });
  let getSelected = document.querySelectorAll(".selected");
  getSelected.forEach((selected) => {
    selected.classList.remove("selected");
  });
  lightbox.style.display = "none";
  main.ariaHidden = "false";
  main.style.display = "block";
}
