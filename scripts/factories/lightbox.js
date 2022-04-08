class lightboxFactory {
  constructor(data) {
    return this.getLightboxDOM(data);
  }
  getLightboxDOM(data) {
    const { title, image, video } = data;
    const pictures = `assets/photographers/media/${image}`;
    const records = `assets/photographers/media/${video}`;
    const previousButton = document.getElementById("btn-previous");
    const nextButton = document.getElementById("btn-next");
    const article = document.createElement("article");
    article.classList.add("lightbox-container");
    const titles = document.createElement("h2");
    const a = document.createElement("a");
    a.setAttribute("href", "#");
    a.appendChild(titles);
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
        videos.autoplay = true;
        article.appendChild(videos);
        article.appendChild(a);
      }
      if (image != undefined) {
        picture.setAttribute("src", pictures);
        article.appendChild(picture);
        article.appendChild(a);
      }
    }
    displayMedia();
    let getAllLinkPicture = document.querySelectorAll(".current-picture");
    for (let i = 0; i < getAllLinkPicture.length; i++) {
      const element = getAllLinkPicture[i];
      element.setAttribute("data-id", i);
      article.setAttribute("data-id", i);
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
          } else if (e.keyCode === 27) {
            closeLightbox();
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

        function displayLightbox() {
          lightbox.style.display = "block";
          main.ariaHidden = "true";
          main.style.display = "none";
          if (selected.getAttribute("data-id")) {
            getAllArticle[i].classList.add("displayed-block");
          } else {
            article.classList.remove("displayed-block");
          }
          console.log(getAllArticle[i]);
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
            i = getDataLightbox.length - 1;
          } else {
            i--;
          }
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
            i = 0;
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
}
