async function getPhotographers() {
  // Penser à remplacer par les données récupérées dans le json

  // Autre solution pour récupérer les données dans le json
  // Seulement sur un serveur pas possible en local car le navigateur autorise que les serveurs http ou https

  const photographers = await getDataPhotographer();

  // et bien retourner le tableau photographers seulement une fois

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
