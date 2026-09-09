const herfstVazen = [
  {
    name: "Herfst Hooglander",
    image: "1C4B6815-5A5D-46C5-BF3D-37EE96FB6384.jpeg",
    price: "€17,50"
  }
];

const beschikbaarGrid = document.getElementById("herfst-beschikbaar");

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
