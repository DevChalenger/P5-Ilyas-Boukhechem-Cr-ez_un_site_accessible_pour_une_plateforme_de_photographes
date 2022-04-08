async function getMediasById() {
  const media = await getDataMedia();
  const photographers = await getDataPhotographer();
  let urlChecking = new URLSearchParams(window.location.search);
  const getId = urlChecking.get("id");
  const mediaById = media.filter((data) => data.photographerId == getId);
  photographers.filter((data) => {
    if (data.id == getId) {
      photographerContactFactory(data);
    }
  });

  return { medias: [...mediaById] };
}

async function displayPhotorgapher(medias) {
  const mediaSection = document.querySelector("#media-section");
  const lightboxContainer = document.getElementById("picture-container");
  sortCategories(medias);
  medias.forEach((media) => {
    ////
    const mediaModel = new mediaFactory(media);
    mediaSection.appendChild(mediaModel);
    ////
    const lightboxModel = new lightboxFactory(media);
    lightboxContainer.appendChild(lightboxModel);
  });
  totalLikes();
}
async function initMedia() {
  // Récupère les media du photographe
  const { medias } = await getMediasById();

  displayPhotorgapher(medias);
}

initMedia();
