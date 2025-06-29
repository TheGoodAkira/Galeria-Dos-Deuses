const galeria = document.getElementById("galeria");

function carregarDeuses(filtro = "todas") {
  galeria.innerHTML = "";
  deuses
    .filter(d => filtro === "todas" || d.mitologia === filtro)
    .forEach(deus => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <h2>${deus.nome} (${deus.mitologia})</h2>
        <p><strong>Domínio:</strong> ${deus.dominio}</p>
        <p class="simbolos"><strong>Símbolos:</strong> ${deus.simbolos.join(" ")}</p>
        <p>${deus.descricao}</p>
        <a href="${deus.mitologia.toLowerCase()}.html">Ver mais sobre ${deus.mitologia}</a>
      `;
      galeria.appendChild(card);
    });
}

function filtrar(mitologia) {
  carregarDeuses(mitologia);
}

window.onload = () => carregarDeuses();