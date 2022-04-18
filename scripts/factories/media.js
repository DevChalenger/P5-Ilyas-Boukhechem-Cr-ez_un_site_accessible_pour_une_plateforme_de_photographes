class mediaFactory {
  constructor(data) {
    if (data.video) {
      return new getVideoDOM(data, new buildMediaDom(data));
    } else if (data.image) {
      return new getImageDOM(data, new buildMediaDom(data));
    } else {
      throw "error we have not found the data";
    }
  }
}
/**
 * Represents the data.
 * @constructor
 * @param {object} data - The data of the object
 * @param {string} title - The title of the data.
 * @param {number} likes - The number of likes from the data.
 */
class buildMediaDom {
  constructor(data) {
    const { title, likes } = data;

    //create article for the media section//
    const article = document.createElement("article");
    article.style.width = "350px";

    article.style.display = "flex";
    article.style.flexDirection = "column-reverse";

    const divText = document.createElement("div");
    //create block under the picture//
    divText.style.height = "80px";
    divText.style.color = "#901c1c";
    divText.style.display = "flex";
    divText.style.alignItems = "start";
    divText.style.justifyContent = "space-between";
    divText.style.marginTop = "0.5em";
    //Create title of picture///
    const titles = document.createElement("h2");
    titles.style.margin = "0";
    const a = document.createElement("a");
    a.classList = "title-media";
    a.textContent = title;
    a.setAttribute("href", "#");
    a.addEventListener("click", (event) => {
      event.preventDefault();
    });
    a.style.overflowWrap = "break-word";

    //create like block//
    const likeBlock = document.createElement("div");
    const likesCounter = document.createElement("span");
    const likeButton = document.createElement("button");
    const likesIcon = document.createElement("span");
    likeButton.classList.add("button-like");
    likeButton.ariaLabel = `button de like pour l'image '${title}'`;
    likesCounter.textContent = likes;
    likesCounter.classList.add("numbers-likes");
    likesIcon.classList.add("fa-solid", "fa-heart", "heart-icon");
    likesIcon.style.fontSize = "1.5em";
    likeBlock.style.display = "flex";
    likeBlock.style.alignItems = "center";
    likeBlock.style.justifyContent = "space-between";
    likeBlock.style.fontSize = "1.2em";
    //Add child element//
    titles.appendChild(a);
    likeBlock.appendChild(likesCounter);
    likeBlock.appendChild(likeButton);
    likeButton.appendChild(likesIcon);

    divText.appendChild(titles);
    divText.appendChild(likeBlock);
    article.appendChild(divText);
    divText.style.order = 1;
    return article;
  }
}
/**
 * Represents the data.
 * @constructor
 * @param {object} data - The data of the object
 * @param {string} title - The title of the data.
 * @param {string} image - The image of the data.
 */
class getImageDOM {
  constructor(data, article) {
    const { title, image } = data;
    const picture = `assets/photographers/media/${image}`;
    const blockImages = document.createElement("a");
    const images = document.createElement("img");
    blockImages.setAttribute("href", "#");
    blockImages.classList.add("lightbox-link");
    images.setAttribute("src", picture);
    images.setAttribute("alt", title + " image");
    images.classList.add("current-picture");
    images.style.width = "350px";
    images.style.height = "300px";
    images.style.objectFit = "cover";
    images.style.borderRadius = "0.3em";
    images.style.cursor = "pointer";
    //Add child element//
    article.appendChild(blockImages);
    blockImages.appendChild(images);
    blockImages.style.order = 2;
    return article;
  }
}
/**
 * Represents the data.
 * @constructor
 * @param {object} data - The data of the object
 * @param {string} title - The title of the data.
 * @param {string} video - The video of the data.
 */
class getVideoDOM {
  constructor(data, article) {
    const { title, video } = data;
    const record = `assets/photographers/media/${video}`;
    const blockVideo = document.createElement("a");
    const videos = document.createElement("video");
    const description = document.createElement("p");
    description.textContent = title + "for video";
    blockVideo.setAttribute("href", "#");
    blockVideo.classList.add("lightbox-link");
    videos.classList.add("current-picture");
    videos.setAttribute("src", record);
    videos.ariaLabel = title + " video";
    videos.style.width = "350px";
    videos.style.height = "300px";
    videos.style.objectFit = "cover";
    videos.style.borderRadius = "0.3em";
    blockVideo.appendChild(videos);
    videos.appendChild(description);
    //Add child element//
    videos.style.cursor = "pointer";
    article.appendChild(blockVideo);
    blockVideo.style.order = 2;
    return article;
  }
}
