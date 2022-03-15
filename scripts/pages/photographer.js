//Mettre le code JavaScript lié à la page photographer.html
async function getMediasById() {
  const media = getDataMedia();
  let urlChecking = new URLSearchParams(window.location.search);
  const getId = urlChecking.get("id");
  const mediaById = media.filter((data) => data.photographerId == getId);

  function sortCategories() {
    const byPopularity = document.getElementById("sort-by-popularity");
    const byTitle = document.getElementById("sort-by-title");
    const byDate = document.getElementById("sort-by-date");
    // sort by popularity
    byPopularity.addEventListener("click", () => {
      document.querySelector(".media-section").innerHTML = "";
      mediaById.sort((a, b) => a.likes - b.likes);
      mediaById.reverse();
      displayPhotorgapher(mediaById);
    });
    // sort by title
    byTitle.addEventListener("click", () => {
      document.querySelector(".media-section").innerHTML = "";
      mediaById.sort((a, b) => a.title.localeCompare(b.title));
      displayPhotorgapher(mediaById);
    });
    // sort by date
    byDate.addEventListener("click", () => {
      document.querySelector(".media-section").innerHTML = "";
      mediaById.sort(
        (a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf()
      );
      displayPhotorgapher(mediaById);
    });
  }
  sortCategories();
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
