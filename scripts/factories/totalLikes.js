function totalLikes() {
  let getAllLikes = document.querySelectorAll(".numbers-likes");
  let getButtonLikes = document.querySelectorAll(".heart-icon");
  let getTotalLikes = document.getElementById("total-likes");
  console.log(getButtonLikes);
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
        console.log(getAllLikes[i]);
      } else {
        getAllLikes[i].textContent--;
        getTotalLikes.textContent--;
      }
    });
  }
}
