function photographerFactory(data) {
  const { name, portrait, price, tagline, city, country } = data;

  const picture = `assets/photographers/avatar/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement("article");
    const div = document.createElement("div");
    //Avatar Elements//
    const divImage = document.createElement("div");
    const avatar = document.createElement("img");
    avatar.setAttribute("src", picture);
    avatar.classList.add("avatar");
    //Names Elements//
    const names = document.createElement("h2");
    names.textContent = name;
    names.classList.add("names");
    //CitiesAndCountrie Elements//
    const citiesAndCountrie = document.createElement("p");
    citiesAndCountrie.textContent = city + ", " + country;
    citiesAndCountrie.classList.add("citiesAndCountries");
    //Summary Elements//
    const summary = document.createElement("p");
    summary.textContent = tagline;
    summary.classList.add("summary");
    //Prices Elements//
    const prices = document.createElement("p");
    prices.textContent = price + " €";
    prices.classList.add("prices");
    //child Elements//
    article.appendChild(divImage);
    divImage.appendChild(avatar);
    article.appendChild(names);
    article.appendChild(citiesAndCountrie);

    article.appendChild(summary);
    article.appendChild(prices);
    return article;
  }
  return { name, picture, getUserCardDOM };
}
