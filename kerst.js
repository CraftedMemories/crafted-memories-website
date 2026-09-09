const kerstVazen = [
  {
    name: "Winter Magic",
    image: "58DCDA64-042F-4ABE-B4F7-5D0205488E88.jpeg",
    price: "€20,00"
  },
  {
    name: "Gingerbread Christmas",
    image: "C543CA1A-D6FC-4E7D-A5B2-D0F548281013.jpeg",
    price: "€20,00"
  },
  {
    name: "Grinchmas",
    image: "97DDDB79-01A9-492F-8502-FF01D65AE6CE.jpeg",
    price: "€17,50"
  },
  {
    name: "Winter Blossom",
    image: "10433C12-7BF6-43DB-9AE0-11981ED219F3.jpeg",
    price: "€15,00"
  },
  {
    name: "Santa Sparkle Express",
    image: "B045F2E7-1BBE-411B-89F3-C1B6EFE4E4F8.jpeg",
    price: "€32,50"
  },
  {
    name: "Pink Winter Wishes",
    image: "0E82EF08-6CF4-4591-8891-020D77AC53BB.jpeg",
    price: "€15,00"
  },
  {
    name: "Christmas Forest Friends",
    image: "B9532678-160B-4671-BFC4-ED15B3D7B489.jpeg",
    price: "€15,00"
  },
  {
    name: "Pink Christmas Butterfly",
    image: "356044CF-8097-49A2-87F2-EAC2B0F78C97.jpeg",
    price: "€20,00"
  },
  {
    name: "Christmas Reindeer & Penguin",
    image: "B37C12A0-F07E-4865-8126-04968A61E282.jpeg",
    price: "€15,00"
  },
  {
    name: "Merry Christmas Santa",
    image: "39FC157E-DBBE-42F5-BFDD-981FDFE73C64.jpeg",
    price: "€22,50"
  },
  {
    name: "Blue Christmas Magic",
    image: "85C51A86-FC00-4763-B7ED-3511754EF2CD.png",
    price: "€20,00"
  },
  {
    name: "Pink Christmas Mischief",
    image: "85C51A86-FC00-4763-B7ED-3511754EF2CD.png",
    price: "€25,00"
  },
  {
    name: "Christmas Together",
    image: "85C51A86-FC00-4763-B7ED-3511754EF2CD.png",
    price: "€15,00"
  },
  {
    name: "Winter Sisters",
    image: "85C51A86-FC00-4763-B7ED-3511754EF2CD.png",
    price: "€25,00"
  }
];

const kerstVerkocht = [
  {
    name: "Christmas Elegance",
    image: "B98E31A1-D73C-4F20-905D-39A4D51E48A8.jpeg"
  },
  {
    name: "Winter Wonderland",
    image: "EAC23549-0D9B-4896-9E55-B3A9CA53A1FB.png"
  }
];

const beschikbaarGrid = document.getElementById("kerst-beschikbaar");
const verkochtGrid = document.getElementById("kerst-verkocht");

kerstVazen.forEach((vaas) => {
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

kerstVerkocht.forEach((vaas) => {
  const kaart = document.createElement("div");
  kaart.className = "fotoboek-item";

  kaart.innerHTML = `
    <img src="${vaas.image}" alt="${vaas.name} vaas">
    <h2>${vaas.name}</h2>
    <p>SOLD OUT</p>
  `;

  verkochtGrid.appendChild(kaart);
});
