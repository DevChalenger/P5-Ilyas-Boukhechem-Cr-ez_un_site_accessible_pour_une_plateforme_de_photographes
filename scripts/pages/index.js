async function getPhotographers() {
  ///
  const photographers = await getDataPhotographer();
  return {
    photographers: [...photographers],
  };
}

async function displayPhotorgapher(photographers) {
  const photographersSection = document.querySelector(".photographer_section");
  photographers.forEach((photographer) => {
    const photographerModel = new photographerFactory(photographer);
    photographersSection.appendChild(photographerModel);
  });
}

async function initPhotographers() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  displayPhotorgapher(photographers);
}

initPhotographers();
