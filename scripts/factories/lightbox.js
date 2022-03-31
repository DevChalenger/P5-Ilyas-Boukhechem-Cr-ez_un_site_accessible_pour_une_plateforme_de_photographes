function lightboxFactory(data) {
  const { title, image, video } = data;
  const pictures = `assets/photographers/media/${image}`;
  const records = `assets/photographers/media/${video}`;
  const previousButton = document.getElementById("btn-previous");
  const nextButton = document.getElementById("btn-next");

  function getLightboxDOM() {
    const article = document.createElement("article");
    article.classList.add("lightbox-container");
    const titles = document.createElement("h2");
    titles.textContent = title;
    const linkMedia = document.querySelectorAll(".lightbox-link");
    const picture = document.createElement("img");
    picture.setAttribute("alt", title + " picture");
    picture.classList.add("media-lightbox");
    const videos = document.createElement("video");
    videos.classList.add("media-lightbox");

    function displayMedia() {
      if (video != undefined) {
        videos.setAttribute("src", records);
        article.appendChild(videos);
        article.appendChild(titles);
      }
      if (image != undefined) {
        picture.setAttribute("src", pictures);
        article.appendChild(picture);
        article.appendChild(titles);
      }
    }
    displayMedia();
    let getAllLinkPicture = document.querySelectorAll(".current-picture");
    for (let i = 0; i < getAllLinkPicture.length; i++) {
      const element = getAllLinkPicture[i];
      element.setAttribute("data-id", i);
    }
    for (let i = 0; i < linkMedia.length; i++) {
      linkMedia[i].addEventListener("click", (event) => {
        event.preventDefault();
        const main = document.getElementById("main");
        const lightbox = document.getElementById("lightbox-section");
        let selected = linkMedia[i].querySelector(".current-picture");
        const getDataLightbox = document.querySelectorAll(".current-picture");
        let getAllArticle = document.querySelectorAll(".lightbox-container");
        function keyPress(e) {
          if (e.keyCode === 37) {
            previousPicture();
          } else if (e.keyCode === 39) {
            nextPicture();
          }
        }
        function closeLightbox() {
          i = selected.dataset.id;
          getAllArticle.forEach((article) => {
            article.classList.remove("displayed-block");
          });
          lightbox.style.display = "none";
          main.ariaHidden = "false";
          main.style.display = "block";
          previousButton.removeEventListener("click", previousPicture);
          nextButton.removeEventListener("click", nextPicture);
          window.removeEventListener("keydown", keyPress);
        }
        if ((getAllArticle[i] = selected)) {
          getAllArticle[i].classList.add("displayed-block");
        } else {
          article.classList.remove("displayed-block");
        }
        function displayLightbox() {
          lightbox.style.display = "block";
          main.ariaHidden = "true";
          main.style.display = "none";

          displayMedia();
        }
        displayLightbox();
        function previousPicture() {
          getAllArticle[i].classList.remove("displayed-block");
          if (i != getDataLightbox[i].dataset.id) {
            getAllArticle.forEach((select) => {
              select.classList.remove("displayed-block");
            });
          }
          if (i < 1) {
            i = 0;
          } else {
            i--;
          }
          console.log(i);
          getAllArticle[i].classList.add("displayed-block");
          displayMedia();
        }
        function nextPicture() {
          getAllArticle[i].classList.remove("displayed-block");
          getAllArticle.forEach((element) => {
            element.classList.remove("displayed-block");
          });
          if (i != getDataLightbox[i].dataset.id) {
            getAllArticle.forEach((select) => {
              select.classList.remove("displayed-block");
            });
          }
          if (i >= getDataLightbox.length - 1) {
            i = getDataLightbox.length - 1;
          } else {
            i++;
          }
          getAllArticle[i].classList.add("displayed-block");
          displayMedia();
        }
        const getCloseLightbox = document.getElementById("close-lightbox");

        window.addEventListener("keydown", keyPress);
        getCloseLightbox.addEventListener("click", closeLightbox);
        previousButton.addEventListener("click", previousPicture);
        nextButton.addEventListener("click", nextPicture);
      });
    }
    return article;
  }
  return { getLightboxDOM };
}
