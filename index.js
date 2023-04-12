const list = document.querySelector(".container")

const pokemons = [];


async function fetchData() {
  try {
    for (let id = 1; id <= 9; id++) {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();
      /*   console.log(data); */
      pokemons.push(data);
    }
    printerShow();
  } catch (error) {
    console.log(error);
  }
}
fetchData();

function printerShow() {
  const markup = pokemons
    .map((pokemon) => {
      return `
      <div class = "pokemon__card">
      <h1>${pokemon.name}</h1>
      <img src=${pokemon.sprites.back_default} alt="${pokemon.name}">
      <h3>id #${pokemon.id}</h3>
      </div>
  `;
    })
    .join("");
  list.innerHTML = markup;
  console.log(pokemons);
}
