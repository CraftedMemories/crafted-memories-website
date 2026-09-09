const voorjaarVazen = [
  {
    name: "Happy Easter",
    image: "3C48F941-2E16-4BCC-8D1F-EB5649BBA481.jpeg",
    price: "€20,00"
  }
];

const beschikbaarGrid = document.getElementById("voorjaar-beschikbaar");

voorjaarVazen.forEach((vaas) => {
  const kaart = document.createElement("div");
  kaart.className = "fotoboek-item";

  kaart.innerHTML = `
    <a href="vaas.html?naam=${encodeURIComponent(vaas.name)}">
      <img src="${vaas.image}" alt="${vaas.name} vaas">
    </a>
    <h2>${vaas.name}</h2>
    <p>${vaas.price}</p>
  `;

  beschikbaarGrid.appendChild(kaart);
});
