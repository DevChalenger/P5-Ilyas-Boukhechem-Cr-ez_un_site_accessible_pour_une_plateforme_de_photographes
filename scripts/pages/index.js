async function getPhotographers() {
  // Penser à remplacer par les données récupérées dans le json
  const photographers = getDataPhotographer();
  // et bien retourner le tableau photographers seulement une fois
  fetch("data/photographers.json").then((response) => {
    console.log(response.json());
  });
  return {
    photographers: [...photographers],
  };
}

async function displayPhotorgapher(photographers) {
  const photographersSection = document.querySelector(".photographer_section");

  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

async function initPhotographers() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  displayPhotorgapher(photographers);
}

initPhotographers();
