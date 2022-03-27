async function getPhotographers() {
  // Penser à remplacer par les données récupérées dans le json
  const photographers = getDataPhotographer();
  // Autre solution pour récupérer les données dans le json
  // Seulement sur un serveur pas possible en local car le navigateur autorise que les serveurs http ou https

  /*  fetch("data/photographers.json").then((response) =>
    console.log(response.photographerData.json())
  );
 */
  // et bien retourner le tableau photographers seulement une fois

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
