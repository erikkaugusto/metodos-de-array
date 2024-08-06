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

// Imagine que você está desenvolvendo um sistema de e-commerce para uma livraria online. Uma das funcionalidades desejadas é a aplicação automática de descontos em todos os livros para uma promoção especial. Você deve criar um script em JavaScript que, dado um array de livros, aplique um desconto de 20% em cada livro e exiba o novo preço no console. Cada livro no array é um objeto que possui as propriedades nome e preco. Utilize o método map para aplicar o desconto e forEach para exibir os novos preços.