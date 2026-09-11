const fanFavoritesVazen = [
  {
    name: "Mafia Royale",
    image: "31FB12F1-5037-4913-88D0-F16992F3C587.png",
    price: "€27,50"
  },
  {
    name: "Amy",
    image: "A383C0F9-3424-445E-A973-BFA6EA468EBE.jpeg",
    price: "€17,50"
  },
  {
    name: "Peaky Blinders",
    image: "4CC73CB2-A297-49A9-A15D-7CFB54C53876.jpeg",
    price: "€17,50"
  },
  {
    name: "Wild Love",
    image: "6D89D0C3-C4ED-4675-84BA-D15532F8EE0F.jpeg",
    price: "€15,00"
  },
  {
    name: "Love on Tour",
    image: "85C51A86-FC00-4763-B7ED-3511754EF2CD.png",
    price: "€40,00"
  },
  {
    name: "Tropical Blue",
    image: "85C51A86-FC00-4763-B7ED-3511754EF2CD.png",
    price: "€17,50"
  },
  {
    name: "Honey Bee",
    image: "85C51A86-FC00-4763-B7ED-3511754EF2CD.png",
    price: "€15,00"
  },
  {
    name: "Minty Garden",
    image: "85C51A86-FC00-4763-B7ED-3511754EF2CD.png",
    price: "€15,00"
  },
  {
    name: "Golden Magic",
    image: "85C51A86-FC00-4763-B7ED-3511754EF2CD.png",
    price: "€22,50"
  }
];

const fanFavoritesVerkocht = [
  {
    name: "Andre Hazes",
    image: "CF307AEF-E558-4D1A-8627-5620C2901444.jpeg"
  },
  {
    name: "Betty Boop",
    image: "A2A41468-14C0-4466-A314-8E4B9229496D.jpeg"
  },
  {
    name: "Happy Friends",
    image: "0D17E4DB-FA7A-4909-A952-78E06C297F8D.jpeg"
  },
  {
    name: "System of a down",
    image: "281F24FC-984F-4AF9-BEBC-5D1489805AB6.jpeg"
  },
  {
    name: "ADO - onze trots",
    image: "276E7A3E-827C-478C-92FA-A1EAD0221406.jpeg"
  },
  {
    name: "Gramps Morgan",
    image: "278E7E8E-BB40-4950-A5B6-4D31384AF3F7.jpeg"
  },
  {
    name: "UB40",
    image: "2911B43E-1510-4987-B78A-06A213E4C996.jpeg"
  },
  {
    name: "Bob Marley",
    image: "88E6D3C8-DB87-453A-90C9-50120182B34C.jpeg"
  },
  {
    name: "Beatles Abbey Road",
    image: "DFE7C088-A237-4C98-99BC-C540738210A0.jpeg"
  },
  {
    name: "ADO Den Haag",
    image: "D450169A-BEB9-4834-A5CA-FE6380DABC86.jpeg"
  },
  {
    name: "Elvis presley",
    image: "0C311DF8-5453-46C5-9B6B-8F7A255EAC0F.jpeg"
  },
  {
    name: "Billie Eilish",
    image: "6A128979-BD3B-43CF-99D5-27560303B61A.jpeg"
  }
];

const beschikbaarGrid = document.getElementById("fan-favorites-beschikbaar");
const verkochtGrid = document.getElementById("fan-favorites-verkocht");

fanFavoritesVazen.forEach((vaas) => {
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

fanFavoritesVerkocht.forEach((vaas) => {
  const kaart = document.createElement("div");
  kaart.className = "fotoboek-item";

  kaart.innerHTML = `
    <img src="${vaas.image}" alt="${vaas.name} vaas">
    <h2>${vaas.name}</h2>
    <p>SOLD OUT</p>
  `;

  verkochtGrid.appendChild(kaart);
});
