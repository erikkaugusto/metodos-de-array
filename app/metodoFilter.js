const botoes = document.querySelectorAll('.btn');
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros));

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id); // pra saber qual botão está sendo clicado   
    const categoria = elementoBtn.value;  
    let livrosFiltrados = livros.filter(livro => livro.categoria === categoria);
    exibirOsLivrosNaTela(livrosFiltrados);
}