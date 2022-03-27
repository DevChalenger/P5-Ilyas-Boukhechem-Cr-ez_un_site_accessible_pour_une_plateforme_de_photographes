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
    for (let i = 0; i < linkMedia.length; i++) {
      linkMedia[i].addEventListener("click", (event) => {
        event.preventDefault();
        const main = document.getElementById("main");
        const lightbox = document.getElementById("lightbox-section");
        function displayLightbox() {
          lightbox.style.display = "block";
          main.ariaHidden = "true";
          main.style.display = "none";
        }
        let selected = linkMedia[i].querySelector(".current-picture");
        const getDataLightbox = document.querySelector(".current-picture");
        getDataLightbox.setAttribute("data-id", i);
        console.log(getDataLightbox);
        function closeLightbox() {
          i = getDataLightbox.dataset.id;
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

        displayLightbox();

        let getAllArticle = document.querySelectorAll(".lightbox-container");
        if ((getAllArticle[i] = selected)) {
          getAllArticle[i].classList.add("displayed-block");
        } else {
          article.classList.remove("displayed-block");
        }

        displayMedia();

        function previousPicture(event) {
          event.preventDefault();
          getAllArticle[i].classList.remove("displayed-block");
          if (i != getDataLightbox.dataset.id) {
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

        function nextPicture(event) {
          event.preventDefault();
          if (i != getDataLightbox.dataset.id) {
            getAllArticle.forEach((select) => {
              select.classList.remove("displayed-block");
            });
          }
          getAllArticle[i].classList.remove("displayed-block");

          if (i >= linkMedia.length - 1) {
            i = linkMedia.length - 1;
          } else {
            i++;
          }
          console.log(i);
          getAllArticle[i].classList.add("displayed-block");

          displayMedia();
        }
        const getCloseLightbox = document.getElementById("close-lightbox");
        getCloseLightbox.addEventListener("click", closeLightbox);
        previousButton.addEventListener("click", previousPicture);
        nextButton.addEventListener("click", nextPicture);
      });
    }

    return article;
  }
  return { getLightboxDOM };
}
