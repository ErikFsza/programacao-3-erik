const botoes = document.querySelectorAll(".botao");

botoes.forEach((botao, i) => {
  botao.addEventListener("click", () => {
    botoes.forEach((btn) => {
      btn.classList.remove("ativo");
    });
    botao.classList.add("ativo");
  });
});
