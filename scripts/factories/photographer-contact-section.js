function photographerContactFactory(data) {
  const { name, portrait, price, tagline, city, country } = data;
  const form = document.querySelector("form");
  form.addEventListener("click", (event) => {
    event.preventDefault();
    const firstName = document.getElementById("firstName");
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    console.log(firstName.value);
    console.log(name.value);
    console.log(email.value);
    console.log(message.value);
  });
  const picture = `assets/photographers/avatar/${portrait}`;
  document.getElementById("contact-name").textContent = name;
  function getUserContactDOM() {
    const getSection = document.getElementById("contact-section");
    ////
    const namePhotographer = document.createElement("h1");
    const selectDivText = document.createElement("a");
    selectDivText.setAttribute("href", "#");
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
    const salary = document.getElementById("salary-content");
    salary.innerHTML = `${price} € / jour`;
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
    selectDivText.appendChild(divText);
    getSection.appendChild(selectDivText);
    getSection.appendChild(button);
    getSection.appendChild(avatar);
    return getSection;
  }
  return getUserContactDOM();
}
