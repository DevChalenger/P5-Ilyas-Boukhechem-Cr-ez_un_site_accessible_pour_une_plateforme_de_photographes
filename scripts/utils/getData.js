async function getDataMedia() {
  try {
    const responseApiMedia = await fetch(`data/photographers.json`);
    if (responseApiMedia.ok) {
      const elementsMedia = await responseApiMedia.json();
      return elementsMedia.media;
    }
  } catch (errArticle) {
    alert("Une erreur est survenu : désolé pour ce contre-temps ");
  }
}

async function getDataPhotographer() {
  try {
    const responseApiPhotographer = await fetch(`data/photographers.json`);
    if (responseApiPhotographer.ok) {
      const elementsPhotographer = await responseApiPhotographer.json();
      return elementsPhotographer.photographersData;
    }
  } catch (errArticle) {
    alert("Une erreur est survenu : désolé pour ce contre-temps ");
  }
}
