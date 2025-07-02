const galeria = document.getElementById("galeria");
const pagina = window.location.pathname.split("/").pop().split(".")[0];
const nomeMitologia = pagina.charAt(0).toUpperCase() + pagina.slice(1);

const deusesFiltrados = deuses.filter(d => d.mitologia.toLowerCase() === nomeMitologia.toLowerCase());

deusesFiltrados.forEach(deus => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = 
    <h2>${deus.nome}</h2>
    <p><strong>Domínio:</strong> ${deus.dominio}</p>
    <p class="simbolos"><strong>Símbolos:</strong> ${deus.simbolos.join(" ")}</p>
    <p>${deus.descricao}</p>
  ;
  galeria.appendChild(card);
});
