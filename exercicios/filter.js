const livros = [
    { nome: "Livro A", preco: 15 },
    { nome: "Livro B", preco: 25 },
    { nome: "Livro C", preco: 40 }
];

const livrosFiltrados = livros.filter(livro => livro.nome === "Livro A");
console.log(livrosFiltrados);

const livrosFiltradosPorPreco = livros.filter(livro => livro.preco > 20);
console.log(livrosFiltradosPorPreco);

