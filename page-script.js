const galeria = document.getElementById("galeria");

// Captura o nome da página (ex: "egipcia", "nordica", etc.)
const pagina = window.location.pathname.split("/").pop().split(".")[0];

// Coloca a primeira letra maiúscula para exibição
const nomeMitologia = pagina.charAt(0).toUpperCase() + pagina.slice(1);

// Função para remover acentos e normalizar strings
const normalizar = (str) => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

// Filtra os deuses com base no nome da mitologia da página
const deusesFiltrados = deuses.filter(
  (d) => normalizar(d.mitologia) === normalizar(nomeMitologia)
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

