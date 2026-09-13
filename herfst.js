const herfstVazen = [
  {
  name: "Spooky Ghost",
  image: "EEF199D5-58C5-41EE-AD8A-EC8DEB76D010.png",
  price: "€12,50"
},
{
  name: "Mickey & Friends",
  image: "80C278A2-1756-4CD1-A0DC-47018190D95E.jpeg",
  price: "€12,50"
},
{
  name: "Happy Fall Stitch",
  image: "423D40BB-F532-4913-A0C0-D84641A1513B.jpeg",
  price: "€12,50"
},
{
  name: "Stitch Trick or Treat",
  image: "3F91FBEF-13D4-488F-B729-547F3FE846A2.jpeg",
  price: "€12,50"
},
{
  name: "Pooh Halloween",
  image: "2CEF5155-2059-47D4-AF6D-70A0F3516FC0.jpeg",
  price: "€12,50"
},
  {
    name: "Herfst Hooglander",
    image: "1C4B6815-5A5D-46C5-BF3D-37EE96FB6384.jpeg",
    price: "€17,50"
  },
  {
    name: "Hello Fall",
    image: "33C679C4-E7E1-408C-B704-3903C616CDB2.jpeg",
    price: "€27,50"
  },
  {
    name: "Happy Halloween",
    image: "A4D9BF8F-1CA8-4F8B-8D11-59C34707BBAC.jpeg",
    price: "€20,00"
  }
];

const herfstVerkocht = [
  {
    name: "Golden Noir",
    image: "73F70E24-07FB-485E-9841-7E43F5E19481.png"
  },
  {
    name: "Autumn Glow",
    image: "21EF61DD-1FE0-438F-863D-B474E55B6A26.jpeg"
  },
  {
    name: "Autumn Friends",
    image: "B53ED7BE-7A36-4560-89E8-BC32D38F3676.jpeg"
  }
];

const beschikbaarGrid = document.getElementById("herfst-beschikbaar");
const verkochtGrid = document.getElementById("herfst-verkocht");

herfstVazen.forEach((vaas) => {
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

herfstVerkocht.forEach((vaas) => {
  const kaart = document.createElement("div");
  kaart.className = "fotoboek-item";

  kaart.innerHTML = `
    <img src="${vaas.image}" alt="${vaas.name} vaas">
    <h2>${vaas.name}</h2>
    <p>SOLD OUT</p>
  `;

  verkochtGrid.appendChild(kaart);
});
