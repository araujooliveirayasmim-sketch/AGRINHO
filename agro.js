// DADOS DAS ABAS DE CONSCIENTIZAÇÃO
const dadosAbas = {
    solo: {
        titulo: "Rotação de Culturas e Plantio Direto",
        texto: "Evita a erosão, mantém os nutrientes na terra e reduz drasticamente a necessidade de fertilizantes químicos caros. Cuidar do solo é garantir o sustento das próximas gerações."
    },
    agua: {
        titulo: "Captação de Chuva e Manejo Inteligente",
        texto: "Sistemas automatizados evitam o desperdício de água em até 60%. Economizar água hoje significa proteger suas plantações de secas extremas amanhã, mantendo a fazenda produtiva o ano todo."
    },
    energia: {
        titulo: "Energia Solar no Campo",
        texto: "Motores, bombas e cercas elétricas podem rodar 100% com energia do sol. O investimento inicial se paga em poucos anos, zerando sua conta de luz e valorizando a sua propriedade no mercado."
    }
};

// FUNÇÃO PARA MUDAR AS ABAS INFOMATIVAS
function mudarAba(chave) {
    // Atualiza os botões ativos
    const botoes = document.querySelectorAll('.aba-btn');
    botoes.forEach(btn => btn.classList.remove('active'));
    
    // Define o botão clicado como ativo
    event.currentTarget.classList.add('active');

    // Altera o conteúdo da aba com efeito visual
    const areaConteudo = document.getElementById('conteudo-aba');
    areaConteudo.innerHTML = `<h3>${dadosAbas[chave].titulo}</h3><p>${dadosAbas[chave].texto}</p>`;
}

// FUNÇÃO DO SIMULADOR DA FAZENDA SUSTENTÁVEL
function atualizarSimulador() {
    const checkboxes = document.querySelectorAll('.opcoes-simulador input[type="checkbox"]');
    let pontuacaoVerde = 0;

    // Soma os pontos de cada prática ativada
    checkboxes.forEach(box => {
        if (box.checked) {
            pontuacaoVerde += parseInt(box.value);
        }
    });

    // Seleciona os elementos da barra de progresso
    const barra = document.getElementById('barra-progresso');
    const statusTexto = document.getElementById('status-texto');

    // Atualiza visualmente a barra
    barra.style.width = pontuacaoVerde + '%';
    barra.textContent = pontuacaoVerde + '%';

    // Muda o texto e o estilo baseado no progresso
    if (pontuacaoVerde === 0) {
        statusTexto.textContent = "Sua fazenda está no modelo tradicional.";
        barra.style.background = "#e2e8f0";
    } else if (pontuacaoVerde <= 50) {
        statusTexto.textContent = "Bom começo! Sua fazenda já está reduzindo custos e desperdícios.";
        barra.style.background = "#52b788";
    } else if (pontuacaoVerde <= 75) {
        statusTexto.textContent = "Incrível! Sua propriedade é uma referência regional em ecologia.";
        barra.style.background = "#2d6a4f";
    } else {
        statusTexto.textContent = "Parabéns! Fazenda 100% Sustentável. Máxima eficiência, lucro e respeito à natureza!";
        barra.style.background = "#1b4332";
    }
}
