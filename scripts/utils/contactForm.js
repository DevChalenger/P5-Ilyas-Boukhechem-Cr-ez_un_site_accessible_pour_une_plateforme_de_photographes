function displayModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "none";
}
document.addEventListener("keydown", (e) => {
  let key = e.key || e.keyCode;
  if (key == "Escape" || key === 27 || key == "Esc") {
    closeModal();
  }
});
