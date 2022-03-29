function sortCategories(sort) {
  const byPopularity = document.getElementById("sort-by-popularity");
  const byTitle = document.getElementById("sort-by-title");
  const byDate = document.getElementById("sort-by-date");
  const getAllLightbox = document.getElementById("picture-container");
  // select button

  const selectDate = document.getElementById("sort-by-date");
  const selectTitle = document.getElementById("sort-by-title");
  const openButton = document.getElementById("toggle-open");
  const closeButton = document.getElementById("toggle-close");
  const separateBlock = document.querySelectorAll(".separate-block");

  // sort by popularity
  byPopularity.addEventListener("click", () => {
    document.querySelector(".media-section").innerHTML = "";
    getAllLightbox.innerHTML = "";
    sort.sort((a, b) => a.likes - b.likes);

    sort.reverse();

    displayPhotorgapher(sort);
    closeButton.style.display = "block";
    if (openButton.style.display != "none") {
      closeButton.style.display = "none";
    } else {
      closeButton.style.display = "block";
    }
  });
  // sort by title
  byTitle.addEventListener("click", () => {
    document.querySelector(".media-section").innerHTML = "";
    getAllLightbox.innerHTML = "";
    sort.sort((a, b) => a.title.localeCompare(b.title));
    displayPhotorgapher(sort);
    closeButton.style.display = "block";
    if (openButton.style.display != "none") {
      closeButton.style.display = "none";
    } else {
      closeButton.style.display = "block";
    }
  });
  // sort by date
  byDate.addEventListener("click", () => {
    document.querySelector(".media-section").innerHTML = "";
    getAllLightbox.innerHTML = "";
    sort.sort(
      (a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf()
    );

    displayPhotorgapher(sort);
    if (openButton.style.display != "none") {
      closeButton.style.display = "none";
    } else {
      closeButton.style.display = "block";
    }
  });

  closeButton.style.display = "none";
  openButton.addEventListener("click", () => {
    selectTitle.style.display = "block";
    selectDate.style.display = "block";
    openButton.style.display = "none";
    closeButton.style.display = "block";
    separateBlock[0].style.display = "block";
    separateBlock[1].style.display = "block";
  });
  closeButton.addEventListener("click", () => {
    selectTitle.style.display = "none";
    selectDate.style.display = "none";
    openButton.style.display = "block";
    closeButton.style.display = "none";
    separateBlock[0].style.display = "none";
    separateBlock[1].style.display = "none";
  });
}
