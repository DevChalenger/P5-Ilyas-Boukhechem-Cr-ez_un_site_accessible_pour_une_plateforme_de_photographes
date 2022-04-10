/**
 * Represents the of the lightbox.
 * @constructor
 * @param {object} data - The data of the object
 * @param {string} data.video - The video url of the data
 * @param {string} data.image - The image url of the data
 */
class lightboxFactory {
  constructor(data) {
    if (data.video) {
      return new getVideoLightboxDom(data, new getLightboxDOM(data));
    } else if (data.image) {
      return new getImageLightboxDom(data, new getLightboxDOM(data));
    } else {
      throw "error we have not found the data";
    }
  }
}
/**
 * Represents the data of the lightbox.
 * @constructor
 * @param {object} data - The data of the object
 * @param {string} title - The title of the data
 */
class getLightboxDOM {
  constructor(data) {
    const { title } = data;
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
        }
        const getCloseLightbox = document.getElementById("close-lightbox");

        window.addEventListener("keydown", keyPress);
        getCloseLightbox.addEventListener("click", closeLightbox);
        previousButton.addEventListener("click", previousPicture);
        nextButton.addEventListener("click", nextPicture);
      });
    }
    article.appendChild(a);
    return article;
  }
}
/**
 * Represents the data of the lightbox.
 * @constructor
 * @param {object} data - The data of the object
 * @param {string} title - The title of the image.
 * @param {string} image - The image of data.
 */
class getImageLightboxDom {
  constructor(data, article) {
    const { title, image } = data;
    const pictures = `assets/photographers/media/${image}`;
    const picture = document.createElement("img");
    picture.setAttribute("alt", title + " picture");
    picture.classList.add("media-lightbox");
    picture.setAttribute("src", pictures);
    article.appendChild(picture);

    return article;
  }
}
/**
 * Represents the data of the lightbox.
 * @constructor
 * @param {object} data
 * @param {string} video - The video of data.
 */
class getVideoLightboxDom {
  constructor(data, article) {
    const { video } = data;
    const records = `assets/photographers/media/${video}`;
    const videos = document.createElement("video");
    videos.classList.add("media-lightbox");

    videos.setAttribute("controls", "");
    const source = document.createElement("source");
    source.src = records;
    videos.appendChild(source);
    article.appendChild(videos);
    return article;
  }
}
