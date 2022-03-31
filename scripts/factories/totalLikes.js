function totalLikes() {
  let getAllLikes = document.querySelectorAll(".numbers-likes");
  let getButtonLikes = document.querySelectorAll(".button-like");
  let getTotalLikes = document.getElementById("total-likes");
  let total = 0;
  getAllLikes.forEach((number) => {
    total += parseFloat(number.innerHTML);
  });

  getTotalLikes.textContent = total;
  for (let i = 0; i < getButtonLikes.length; i++) {
    const buttonLikes = getButtonLikes[i];
    buttonLikes.addEventListener("click", () => {
      buttonLikes.classList.toggle("liked");
      if (buttonLikes.classList.contains("liked")) {
        getAllLikes[i].textContent++;
        getTotalLikes.textContent++;
        buttonLikes.setAttribute("aria-pressed", "true");
      } else {
        getAllLikes[i].textContent--;
        getTotalLikes.textContent--;
        buttonLikes.setAttribute("aria-pressed", "false");
      }
    });
  }
}
