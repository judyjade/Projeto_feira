
// Obtém o botão e o menu de navegação
const botao = document.getElementById('toggleMenu');
const menu = document.getElementById('menu');

// Adiciona um evento de clique no botão
botao.addEventListener('click', function() {
    // Verifica se o menu está visível ou não
    if (menu.style.display === 'none' || menu.style.display === '') {
        // Se estiver escondido, mostra o menu
        menu.style.display = 'block';
    } else {
        // Se estiver visível, esconde o menu
        menu.style.display = 'none';
    }
});