const allSeasonVazen = [
  {
    name: "Mafia Royale",
    image: "31FB12F1-5037-4913-88D0-F16992F3C587.png",
    price: "€27,50"
  }
];

const beschikbaarGrid = document.getElementById("all-season-beschikbaar");

allSeasonVazen.forEach((vaas) => {
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
