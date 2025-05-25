// selecione o botão "Clique aqui"
var botao = document.getElementById("botao");

// selecione o botão "Limpar"
var limpar = document.getElementById("limpar");

// adiciona evento ao botão "Clique aqui"
botao.addEventListener("click", function() {
  var paragrafo = document.getElementById("paragrafo");
  paragrafo.textContent = "O texto deste parágrafo foi alterado!";
});

// adiciona evento ao botão "Limpar"
limpar.addEventListener("click", function() {
  var paragrafo = document.getElementById("paragrafo");
  paragrafo.textContent = ""; // limpa o texto do parágrafo
});
