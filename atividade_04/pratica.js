const vendasRaw = [
    { produto: 'Teclado', preco: 150 },
    { produto: 'Mouse', preco: 80 },
    { produto: 'Teclado', preco: 150 }, // Duplicado
    { produto: 'Monitor', preco: 900 },
    { produto: 'Mouse', preco: 80 },    // Duplicado
    { produto: 'Mousepad', preco: 30 }
];
    // 1. Criando os itens (exemplo)
const itens = [
  { produto: "Notebook", preco: 1000 },
  { produto: "Mouse", preco: 50 },
  { produto: "Teclado", preco: 110 }
];

// Criando o Map produto -> preço
const mapaProdutos = new Map();

for (const item of itens) {
  mapaProdutos.set(item.produto, item.preco);
}

console.log(mapaProdutos);

// 2. Calculando o total da compra
let total = 0;

for (const item of itens) {
  total += item.preco;
}

console.log("Total:", total); // Saída: 1160
