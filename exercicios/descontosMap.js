const arrayLivros = [
    { nome: "Livro A", preco: 30 },
    { nome: "Livro B", preco: 50 },
    { nome: "Livro C", preco: 45 }
];

const desconto = 0.20;
const livrosComDesconto = arrayLivros.map(livro => ({
    ...livro, preco: (livro.preco - (livro.preco * desconto)).toFixed(2)
}));

arrayLivros.forEach(livro => console.log(`${livro.nome}: R$${livro.preco}`));
livrosComDesconto.forEach(livro => console.log(`${livro.nome}: R$${livro.preco}`));

