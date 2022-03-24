async function getMediasById() {
  const media = getDataMedia();
  const photographers = getDataPhotographer();

  let urlChecking = new URLSearchParams(window.location.search);
  const getId = urlChecking.get("id");
  const mediaById = media.filter((data) => data.photographerId == getId);
  const photographerById = photographers.filter((data) => {
    if (data.id == getId) {
      return data;
    }
  });
  console.log(photographerById);

  return { medias: [...mediaById] };
}

async function displayPhotorgapher(medias) {
  const mediaSection = document.querySelector("#media-section");
  const lightboxContainer = document.getElementById("lightbox-section");
  medias.forEach((media) => {
    ////
    const mediaModel = mediadFactory(media);
    const mediaCardDOM = mediaModel.getMediaDOM();
    mediaSection.appendChild(mediaCardDOM);
    ////
    const lightboxModel = lightboxFactory(media);
    const lightboxCardDOM = lightboxModel.getLightboxDOM();
    lightboxContainer.appendChild(lightboxCardDOM);
  });
}
async function initMedia() {
  // Récupère les datas des photographes
  const { medias } = await getMediasById();
  sortCategories(medias);
  displayPhotorgapher(medias);
}

initMedia();
