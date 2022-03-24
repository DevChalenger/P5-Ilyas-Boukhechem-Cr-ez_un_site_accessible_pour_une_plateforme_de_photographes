function sortCategories(sort) {
  const byPopularity = document.getElementById("sort-by-popularity");
  const byTitle = document.getElementById("sort-by-title");
  const byDate = document.getElementById("sort-by-date");

  // sort by popularity
  byPopularity.addEventListener("click", () => {
    document.querySelector(".media-section").innerHTML = "";
    sort.sort((a, b) => a.likes - b.likes);
    sort.reverse();
    displayPhotorgapher(sort);
  });
  // sort by title
  byTitle.addEventListener("click", () => {
    document.querySelector(".media-section").innerHTML = "";
    sort.sort((a, b) => a.title.localeCompare(b.title));
    displayPhotorgapher(sort);
  });
  // sort by date
  byDate.addEventListener("click", () => {
    document.querySelector(".media-section").innerHTML = "";
    sort.sort(
      (a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf()
    );
    displayPhotorgapher(sort);
  });
  // select button
  const toggleButton = document.getElementById("toggle-list");
  const selectDate = document.getElementById("sort-by-date");
  const selectTitle = document.getElementById("sort-by-title");
  const openButton = document.getElementById("toggle-open");
  const closeButton = document.getElementById("toggle-close");
  const separateBlock = document.querySelectorAll(".separate-block");

  closeButton.style.display = "none";
  toggleButton.addEventListener("click", () => {
    if (openButton.style.display != "none") {
      selectTitle.style.display = "block";
      selectDate.style.display = "block";
      openButton.style.display = "none";
      closeButton.style.display = "block";
      separateBlock[0].style.display = "block";
      separateBlock[1].style.display = "block";
    } else {
      selectTitle.style.display = "none";
      selectDate.style.display = "none";
      openButton.style.display = "block";
      closeButton.style.display = "none";
      separateBlock[0].style.display = "none";
      separateBlock[1].style.display = "none";
    }
  });
}
