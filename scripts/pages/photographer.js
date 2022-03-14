//Mettre le code JavaScript lié à la page photographer.html
async function getMediasById() {
  const media = getDataMedia();
  let urlChecking = new URLSearchParams(window.location.search);
  const getId = urlChecking.get("id");
  const mediaById = media.filter((data) => data.photographerId == getId);
  return { medias: [...mediaById] };
}
async function displayPhotorgapher(medias) {
  const mediaSection = document.querySelector("#media-section");
  medias.forEach((media) => {
    const mediaModel = mediadFactory(media);
    const userCardDOM = mediaModel.getMediaDOM();
    mediaSection.appendChild(userCardDOM);
  });
}
async function initMedia() {
  // Récupère les datas des photographes
  const { medias } = await getMediasById();
  displayPhotorgapher(medias);
}

initMedia();
