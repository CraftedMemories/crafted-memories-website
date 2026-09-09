const zomerVazen = [
  {
    name: "Mediterranean Summer",
    image: "4442E87A-0247-4E8A-8902-3BAC61C6C6DF.jpeg",
    price: "€30,00"
  },
];

const beschikbaarGrid = document.getElementById("zomer-beschikbaar");

zomerVazen.forEach((vaas) => {
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
const zomerVerkocht = [
  {
    name: "Tropical Paradise",
    image: "9FA66EC2-C61C-44E9-97C7-033A707742AD.jpeg"
  }
];

const verkochtGrid = document.getElementById("zomer-verkocht");

zomerVerkocht.forEach((vaas) => {
  const kaart = document.createElement("div");
  kaart.className = "fotoboek-item";

  kaart.innerHTML = `
    <img src="${vaas.image}" alt="${vaas.name} vaas">
    <h2>${vaas.name}</h2>
    <p>SOLD OUT</p>
  `;

  verkochtGrid.appendChild(kaart);
});
