const galeria = document.getElementById("galeria");

// Nome da página (ex: egipcia)
const pagina = window.location.pathname.split("/").pop().split(".")[0];

// Filtra usando o campo idMitologia (sem acento, tudo minúsculo)
const deusesFiltrados = deuses.filter(
  (d) => d.idMitologia === pagina
);

// Renderiza os cards
deusesFiltrados.forEach((deus) => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <h2>${deus.nome}</h2>
    <p><strong>Domínio:</strong> ${deus.dominio}</p>
    <p class="simbolos"><strong>Símbolos:</strong> ${deus.simbolos.join(" ")}</p>
    <p>${deus.descricao}</p>
  `;
  galeria.appendChild(card);
});
