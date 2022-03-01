function photographerFactory(data) {
  const { name, portrait, price, tagline, city, country } = data;

  const picture = `assets/photographers/avatar/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement("article");
    ////
    const avatar = document.createElement("img");
    avatar.setAttribute("src", picture);
    ////
    const names = document.createElement("h2");
    names.textContent = name;
    ////
    const cities = document.createElement("p");
    cities.textContent = city;
    ////
    const countries = document.createElement("p");
    countries.textContent = country;
    const summary = document.createElement("p");
    summary.textContent = tagline;
    const prices = document.createElement("p");
    prices.textContent = price + " €";
    article.appendChild(avatar);
    article.appendChild(names);
    article.appendChild(cities);
    article.appendChild(countries);
    article.appendChild(summary);
    article.appendChild(prices);
    return article;
  }
  return { name, picture, getUserCardDOM };
}
