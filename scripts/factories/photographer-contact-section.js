function photographerContactFactory(data) {
  const { name, portrait, price, tagline, city, country } = data;

  const picture = `assets/photographers/avatar/${portrait}`;
  document.getElementById("contact-name").textContent = name;
  function getUserContactDOM() {
    const getSection = document.getElementById("contact-section");
    ////
    const namePhotographer = document.createElement("h1");
    namePhotographer.textContent = name;
    ////
    const resume = document.createElement("p");
    resume.textContent = tagline;
    ////
    const location = document.createElement("p");
    location.textContent = city + ", " + country;
    location.classList.add("location");
    ////
    const button = document.createElement("button");
    button.classList.add("contact_button");
    button.textContent = "Contactez-moi";
    button.addEventListener("click", displayModal);
    ////
    const avatar = document.createElement("img");
    avatar.setAttribute("src", picture);
    avatar.setAttribute("alt", `${name} avatar`);
    ////
    const divText = document.createElement("div");
    divText.appendChild(namePhotographer);
    divText.appendChild(location);
    divText.appendChild(resume);
    /////
    getSection.appendChild(divText);
    getSection.appendChild(button);
    getSection.appendChild(avatar);
    return getSection;
  }
  return getUserContactDOM();
}
