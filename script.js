const contextMenu = document.getElementById('contextMenu');
const subscribeCard = document.getElementById('subscribeCard');
const closeToast = document.getElementById('closeToast');

// Evento de Clique com Botão Direito
document.addEventListener('contextmenu', (e) => {
    e.preventDefault(); // Bloqueia o menu padrão do sistema

    // 1. Mostrar e posicionar o Menu de Contexto
    contextMenu.style.display = 'block';
    contextMenu.style.top = `${e.pageY}px`;
    contextMenu.style.left = `${e.pageX}px`;

    // 2. Mostrar o Toast do CodingLab (sobe do canto inferior)
    subscribeCard.classList.add('show');
});

// Fechar o menu ao clicar com o botão esquerdo em qualquer lugar
document.addEventListener('click', (e) => {
    if (e.button !== 2) { // Se não for o botão direito
        contextMenu.style.display = 'none';
    }
});

// Fechar o Toast no botão de fechar (X)
closeToast.addEventListener('click', () => {
    subscribeCard.classList.remove('show');
});