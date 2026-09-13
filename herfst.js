const herfstVazen = [
{
  name: "Spooky Ghost",
  price: "€12,50",
  image: "EEF199D5-58C5-41EE-AD8A-EC8DEB76D010.png"
},
{
  name: "Mickey & Friends",
  price: "€12,50",
  image: "C76C4983-5ECB-44AB-84AA-C78DAFF3CDAA.jpeg"
},
{
  name: "Happy Fall Stitch",
  price: "€12,50",
  image: "E47FB805-FD40-4E89-AA24-AB75433A2840.jpeg"
},
{
  name: "Stitch Trick or Treat",
  price: "€12,50",
  image: "B2086CC4-EE8A-45E0-AACE-3EF3597EE7D3.jpeg"
},
{
  name: "Pooh Halloween",
  price: "€12,50",
  image: "D404ACDD-8C56-4B9C-804B-8E4794D3E74F.jpeg"
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
