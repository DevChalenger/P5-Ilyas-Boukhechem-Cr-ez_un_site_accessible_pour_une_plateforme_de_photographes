class mediadFactory {
  constructor(data) {
    if (data.video) {
      return this.getVideoDOM(data);
    } else if (data.image) {
      return this.getImageDOM(data);
    }
  }
  getVideoDOM(data) {
    const { title, likes, video } = data;
    const article = document.createElement("article");
    article.style.width = "350px";
    const divText = document.createElement("div");
    divText.style.color = "#901c1c";
    divText.style.display = "flex";
    divText.style.alignItems = "center";
    divText.style.justifyContent = "space-between";
    /////
    const titles = document.createElement("h2");
    const a = document.createElement("a");
    a.classList = "title-media";
    a.textContent = title;
    a.setAttribute("href", "#");
    a.addEventListener("click", (event) => {
      event.preventDefault();
      displayLightbox();
    });
    a.style.overflowWrap = "anywhere";
    titles.appendChild(a);
    /////
    const likeBlock = document.createElement("div");
    const likesCounter = document.createElement("span");
    const likeButton = document.createElement("button");
    const likesIcon = document.createElement("i");
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
    likeBlock.appendChild(likesCounter);
    likeBlock.appendChild(likeButton);
    likeButton.appendChild(likesIcon);
    /////
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
    videos.style.cursor = "pointer";
    article.appendChild(blockVideo);
    blockVideo.appendChild(videos);
    videos.appendChild(description);

    article.appendChild(divText);
    divText.appendChild(titles);
    divText.appendChild(likeBlock);

    return article;
  }
  getImageDOM(data) {
    const { title, likes, image } = data;
    const picture = `assets/photographers/media/${image}`;
    const article = document.createElement("article");
    article.style.width = "350px";
    const divText = document.createElement("div");
    divText.style.color = "#901c1c";
    divText.style.display = "flex";
    divText.style.alignItems = "center";
    divText.style.justifyContent = "space-between";
    /////
    const titles = document.createElement("h2");
    const a = document.createElement("a");
    a.classList = "title-media";
    a.textContent = title;
    a.setAttribute("href", "#");
    a.addEventListener("click", (event) => {
      event.preventDefault();
      displayLightbox();
    });
    a.style.overflowWrap = "anywhere";
    titles.appendChild(a);
    /////
    const likeBlock = document.createElement("div");
    const likesCounter = document.createElement("span");
    const likeButton = document.createElement("button");
    const likesIcon = document.createElement("i");
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
    likeBlock.appendChild(likesCounter);
    likeBlock.appendChild(likeButton);
    likeButton.appendChild(likesIcon);

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
    article.appendChild(blockImages);
    blockImages.appendChild(images);
    article.appendChild(divText);
    divText.appendChild(titles);
    divText.appendChild(likeBlock);
    return article;
  }
}
