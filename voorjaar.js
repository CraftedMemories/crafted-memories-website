const voorjaarVazen = [
  {
    name: "Love on the Road",
    image: "A57DE690-F9BF-4D19-A2E3-748DB9484E7C.jpeg",
    price: "€22,50"
  },
  {
    name: "Love in Bloom",
    image: "D194EE28-2A0C-44E4-8BAC-514EE96E4E8F.jpeg",
    price: "€22,50"
  },
  {
    name: "Happy Easter",
    image: "3C48F941-2E16-4BCC-8D1F-EB5649BBA481.jpeg",
    price: "€20,00"
  },
  {
    name: "Spring Bunnies",
    image: "75D3AB82-E637-4FCC-BC44-819FCD14A202.jpeg",
    price: "€22,50"
  },
  {
    name: "Rosy Bunny",
    image: "11561348-AF0D-45D8-99F7-B15BEDB73F09.jpeg",
    price: "€12,50"
  },
  {
    name: "Happy Hedgehog",
    image: "A346A8FA-4099-4D6C-8237-F7E12E0F0020.jpeg",
    price: "€17,50"
  },
  {
    name: "Spring Bunny",
    image: "13B71E32-4823-4034-B03C-8C5F62D5A438.jpeg",
    price: "€22,50"
  }
];

const voorjaarVerkocht = [
  {
    name: "Spring Meadow",
    image: "8114101A-857D-41EC-8342-EA83DB1ADB43.jpeg"
  },
  {
    name: "Bunny Blossom",
    image: "3FE9EED8-A2A8-4232-880F-21C1660F8332.jpeg"
  },
  {
    name: "Spring Bunny Garden",
    image: "61B8A7D0-D899-4CC0-8455-41810C9C3BAE.jpeg"
  },
  {
    name: "Easter Bunny",
    image: "04F50E46-E7B5-4D7B-8D07-3FFEF8D304C5.jpeg"
  },
  {
    name: "Easter Truck Bunny",
    image: "AE2E3352-E396-4281-B6B8-AE9FD1BC6E4E.jpeg"
  }
];

const beschikbaarGrid = document.getElementById("voorjaar-beschikbaar");
const verkochtGrid = document.getElementById("voorjaar-verkocht");

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

voorjaarVerkocht.forEach((vaas) => {
  const kaart = document.createElement("div");
  kaart.className = "fotoboek-item";

  kaart.innerHTML = `
    <img src="${vaas.image}" alt="${vaas.name} vaas">
    <h2>${vaas.name}</h2>
    <p>SOLD OUT</p>
  `;

  verkochtGrid.appendChild(kaart);
});
