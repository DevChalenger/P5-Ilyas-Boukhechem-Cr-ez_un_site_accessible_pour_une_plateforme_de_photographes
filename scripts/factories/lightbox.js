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
    const linkMedia = document.querySelectorAll(".lightbox-link");
    const picture = document.createElement("img");
    picture.classList.add("media-lightbox");
    const videos = document.createElement("video");
    videos.classList.add("media-lightbox");
    console.log(linkMedia.length);
    function displayMedia() {
      if (video != undefined) {
        videos.setAttribute("src", records);
        article.appendChild(videos);
      }
      if (image != undefined) {
        picture.setAttribute("src", pictures);
        article.appendChild(picture);
      }
    }
    for (let i = 0; i < linkMedia.length; i++) {
      linkMedia[i].addEventListener("click", (event) => {
        event.preventDefault();
        displayLightbox();
        let selected = linkMedia[i].querySelector(".current-picture");
        let getAllArticle = document.querySelectorAll(".lightbox-container");
        if ((getAllArticle[i] = selected)) {
          getAllArticle[i].classList.add("displayed-block");
        } else {
          article.classList.remove("displayed-block");
        }

        displayMedia();
        function previousPicture(event) {
          event.preventDefault();

          if (i < 1) {
            getAllArticle[i].classList.remove("displayed-block");
            i = 0;
          } else {
            getAllArticle[i].classList.remove("displayed-block");
            i--;
          }
          console.log(i);
          getAllArticle[i].classList.add("displayed-block");
          displayMedia();
        }
        function nextPicture(event) {
          event.preventDefault();

          getAllArticle[i].classList.remove("displayed-block");
          if (i > linkMedia.length - 1) {
            i = linkMedia.length - 1;
          } else {
            i++;
          }
          console.log(i);
          getAllArticle[i].classList.add("displayed-block");

          displayMedia();
        }
        previousButton.addEventListener("click", previousPicture);
        nextButton.addEventListener("click", nextPicture);
      });
    }

    return article;
  }
  return { getLightboxDOM };
}
