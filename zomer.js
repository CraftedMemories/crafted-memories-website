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
    name: "Summer Bloom",
    image: "596A3536-F555-4760-85B7-ED192DAD4F2A.jpeg",
    price: "€32,50"
  },
  {
    name: "Wild Bloom",
    image: "B7729AEB-7887-4427-A1FE-FF2A4921D090.jpeg",
    price: "€32,50"
  },
  {
    name: "Blue Elegance",
    image: "02CBE8C5-856F-49AA-998C-B98E0DFB95AE.png",
    price: "€32,50"
  },
  {
    name: "Pink Butterfly",
    image: "5DF7F3FB-3A1E-4847-B376-2513638F454F.jpeg",
    price: "€22,50"
  },
  {
    name: "Lavender Dream",
    image: "1BDEA3D2-1FD0-4EC7-913D-7C52D6F71D23.jpeg",
    price: "€22,50"
  },
  {
    name: "Lemonade Sunshine",
    image: "859BB12A-E05E-459A-8221-6F5D8F6C60BA.jpeg",
    price: "€22,50"
  }
];

const zomerVerkocht = [
  {
    name: "Ocean Treasures",
    image: "19C50F5C-3BB7-4C92-8BA2-5550675D8CCA.jpeg"
  },
  {
    name: "Golden Butterfly Garden",
    image: "29088E15-7E1F-47D1-9FCF-2BB5AF65E55B.jpeg"
  },
  {
    name: "Tiger Blossom",
    image: "5DC6D0F8-ED09-4069-BE6D-3F17B89F25C9.jpeg"
  },
  {
    name: "Peach Blossom",
    image: "08794F8F-41B4-47C1-BD0F-2EDD130BA97B.jpeg"
  },
  {
    name: "Orchid Fantasy",
    image: "254DE367-D943-4F6D-8C5A-D249A07E79AF.jpeg"
  }
];

const beschikbaarGrid = document.getElementById("zomer-beschikbaar");
const verkochtGrid = document.getElementById("zomer-verkocht");

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
