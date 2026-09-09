const kerstVazen = [
  {
    name: "Winter Magic",
    image: "58DCDA64-042F-4ABE-B4F7-5D0205488E88.jpeg",
    price: "€20,00"
  }
];

const beschikbaarGrid = document.getElementById("kerst-beschikbaar");

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
