function mediadFactory(data) {
  const { title, image, video, likes } = data;
  const picture = `assets/photographers/media/${image}`;
  const record = `assets/photographers/media/${video}`;
  function getMediaDOM() {
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
    const likeBlock = document.createElement("a");
    const likesCounter = document.createElement("span");
    const likesIcon = document.createElement("i");

    likeBlock.setAttribute("href", "#");
    likesCounter.textContent = likes;
    likesIcon.classList.add("fa-solid", "fa-heart", "heart-icon");
    likeBlock.style.display = "flex";
    likeBlock.style.alignItems = "center";
    likeBlock.style.justifyContent = "space-between";
    likeBlock.style.fontSize = "1.2em";
    likeBlock.appendChild(likesCounter);

    likeBlock.appendChild(likesIcon);

    /////
    if (video != undefined) {
      const blockVideo = document.createElement("a");
      const videos = document.createElement("video");
      blockVideo.setAttribute("href", "#");
      blockVideo.classList.add("lightbox-link");
      videos.classList.add("current-picture");
      /*  videos.setAttribute("data-id", 0); */
      videos.setAttribute("src", record);
      videos.style.width = "350px";
      videos.style.height = "300px";
      videos.style.objectFit = "cover";
      videos.style.borderRadius = "0.3em";
      videos.style.cursor = "pointer";
      article.appendChild(blockVideo);
      blockVideo.appendChild(videos);
    }
    /////
    if (image != undefined) {
      const blockImages = document.createElement("a");
      const images = document.createElement("img");
      blockImages.setAttribute("href", "#");
      blockImages.classList.add("lightbox-link");
      images.setAttribute("src", picture);
      images.classList.add("current-picture");
      /* images.setAttribute("data-id", 0); */
      images.style.width = "350px";
      images.style.height = "300px";
      images.style.objectFit = "cover";
      images.style.borderRadius = "0.3em";
      images.style.cursor = "pointer";
      article.appendChild(blockImages);
      blockImages.appendChild(images);
    }
    article.appendChild(divText);
    divText.appendChild(titles);
    divText.appendChild(likeBlock);

    return article;
  }
  return { getMediaDOM };
}
