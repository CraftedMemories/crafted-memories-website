const zomerVazen = [
  {
    name: "Mediterranean Summer",
    image: "4442E87A-0247-4E8A-8902-3BAC61C6C6DF.jpeg",
    price: "€30,00"
  },
  {
    name: "Mediterranean Joy",
    image: "710E94DE-8F59-44D9-BA0C-98CC2E577D07.jpeg",
    price: "€25,00"
  },
  {
    name: "Tropical Toucan",
    image: "854B5BD3-8966-437F-9D71-12C3DACFB6FB.jpeg",
    price: "€22,50"
  },
  {
    name: "Tropical Monkey",
    image: "265484DB-690C-4C05-BFA6-F2ED825C914F.jpeg",
    price: "€15,00"
  },
  {
    name: "Tropische Papegaai",
    image: "4AC7D2DF-E16E-4489-9359-DF0E3EA207FD.jpeg",
    price: "€20,00"
  },
  {
    name: "Tropical Blue",
    image: "85C51A86-FC00-4763-B7ED-3511754EF2CD.png",
    price: "€17,50"
  }
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
