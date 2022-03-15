function mediadFactory(data) {
  const { id, title, image, video, likes } = data;
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
    titles.classList = "title-media";
    titles.textContent = title;
    titles.style.overflowWrap = "anywhere";
    /////
    const likeBlock = document.createElement("div");
    const likesCounter = document.createElement("span");
    const likesIcon = document.createElement("i");
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
      const videos = document.createElement("video");
      const source = document.createElement("source");
      source.setAttribute("src", record);
      videos.setAttribute("controls", "");
      videos.style.width = "350px";
      videos.style.height = "300px";
      videos.style.objectFit = "cover";
      videos.style.borderRadius = "0.3em";
      article.appendChild(videos);
      videos.appendChild(source);
    }
    /////
    if (image != undefined) {
      const images = document.createElement("img");
      images.setAttribute("src", picture);
      images.style.width = "350px";
      images.style.height = "300px";
      images.style.objectFit = "cover";
      images.style.borderRadius = "0.3em";
      article.appendChild(images);
    }

    article.appendChild(divText);
    divText.appendChild(titles);
    divText.appendChild(likeBlock);
    return article;
  }
  return { image, id, getMediaDOM };
}
