const arrayLivros = [
    { nome: "Livro A", preco: 30 },
    { nome: "Livro B", preco: 50 },
    { nome: "Livro C", preco: 45 },
    { nome: "Livro D", preco: 10 },
    { nome: "Livro E", preco: 60 },
    { nome: "Livro F", preco: 35 },
    { nome: "Livro G", preco: 25 },
    { nome: "Livro H", preco: 20 },
    { nome: "Livro I", preco: 55 }
];

let livrosOrdenados = arrayLivros.sort((a, b) => a.preco - b.preco);
console.log(livrosOrdenados);
