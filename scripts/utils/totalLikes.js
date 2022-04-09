function totalLikes() {
  let getAllLikes = document.querySelectorAll(".numbers-likes");
  let getButtonLikes = document.querySelectorAll(".button-like");
  let getTotalLikes = document.getElementById("total-likes");
  let total = 0;
  getAllLikes.forEach((number) => {
    total += parseFloat(number.innerHTML);
  });

  getTotalLikes.textContent = total;
  getTotalLikes.ariaLabel =
    "nombre de likes total enregistrer" + getTotalLikes.textContent;
  for (let i = 0; i < getButtonLikes.length; i++) {
    const buttonLikes = getButtonLikes[i];
    buttonLikes.ariaValueNow = getAllLikes[i].textContent + "likes enregistrer";

    buttonLikes.addEventListener("click", () => {
      buttonLikes.classList.toggle("liked");

      if (buttonLikes.classList.contains("liked")) {
        getAllLikes[i].textContent++;
        getTotalLikes.textContent++;
        buttonLikes.setAttribute("aria-pressed", "true");
        buttonLikes.ariaValueNow =
          getAllLikes[i].textContent + "likes enregistrer";
        getTotalLikes.ariaLabel =
          "nombre de likes total enregistrer " + getTotalLikes.textContent;
      } else {
        getAllLikes[i].textContent--;
        getTotalLikes.textContent--;
        buttonLikes.setAttribute("aria-pressed", "false");
        buttonLikes.ariaValueNow =
          getAllLikes[i].textContent + "likes enregistrer";
        getTotalLikes.ariaLabel =
          "nombre de likes total enregistrer " + getTotalLikes.textContent;
      }
    });
  }
}
