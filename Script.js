const atividades = [
    "Noite de cinema em casa 🍿",
    "Cozinhar juntos uma nova receita 🍝",
    "Jogar um jogo de tabuleiro ou cartas 🎲",
    "Fazer uma noite de spa caseiro 💆‍♀️💆‍♂️",
    "Ouvir música e dançar pela sala 🎶",
    "Maratona de série com pipoca 🍿📺",
    "Fazer um piquenique na sala ou varanda 🧺",
    "Desenhar ou pintar algo juntos 🎨",
    "Montar um quebra-cabeça 🧩",
    "Planejar uma próxima viagem ou passeio juntos ✈️",
    "Fazer uma caixinha de perguntas 🙈",
    "Ir passear no shopping 🏬"
  ];
  
  const diasDaSemana = ["Sábado", "Domingo"];
  
  function gerarProgramacao() {
    const lista = document.getElementById("lista");
    lista.innerHTML = "";
    const atividadesDisponiveis = [...atividades];
  
    diasDaSemana.forEach(dia => {
      const indice = Math.floor(Math.random() * atividadesDisponiveis.length);
      const atividade = atividadesDisponiveis.splice(indice, 1)[0];
  
      const item = document.createElement("li");
      item.innerHTML = `<strong>${dia}:</strong> ${atividade}`;
      lista.appendChild(item);
    });
  }
  
  window.onload = gerarProgramacao;
  