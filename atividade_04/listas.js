// 1. ARRAYS

// 1.1 Array Simples 
const frutas = ["Maçã", "Banana", "Laranja"];
// 1.2 FIFO (Fila)
const fila = ["Ana", "Beto", "Caio", "Daiane"];
fila.push("Ellen");
const primeiro = fila.shift(); // Primeiro Item 
console.log(primeiro);
// 1.3 FILO (Pilha)
const pilha = ["Dragon Ball Z", "Invencivel", "Supernatural"]
pilha.push ("O Alquimista");
const livro = pilha.pop();
console.log (livro);
// 1.4 Buscar se existe
const temLaranja = frutas.includes("Laranja");
const temManga = frutas.includes("Manga");
console.log (temLaranja);
console.log (temManga);

// 2. Sets (Conjuntos)
// 2.1 Adicionando duplicados
const matricula = new Set([1001, 1002, 1005, 1009, 1002])
console.log ([...matriculas]);
// 2.2 Adicionar item
const cores = new Set(["Verde", "Azul"]);
cores.add ("Vermelho");
cores.add ("Branco");
cores.add ("Preto");
console.log([... cores]);
// 2.3 Buscar se Existe
const temVerde = cores.has ("Verde");
const temAmarelo = cores.has ("Amarelo");
console.log(temVerde);
console.log(temAmarelo);
// 2.4 Converter array em set 
const convidados = ["Bruno", "Henrique", "Juliana", "Carol", "Juliana", "Breno", "Henrique"];
const convidados_unicos = new Set (convidados);
console.log ([... convidados_unicos]);

//3. Map (Mapas)
// 3.1 Cadastro de Preços
const produtos = new Map();
produtos.set("Mouse", 50.00)
produtos.set("Teclado", 120.00)
const vendasRaw = [
  { produto: 'Teclado', preco: 150 },
  { produto: 'Mouse', preco: 80 },
  { produto: 'Teclado', preco: 150 }, // Duplicado
  { produto: 'Monitor', preco: 900 },
  { produto: 'Mouse', preco: 80 }, // Duplicado
  { produto: 'Mousepad', preco: 30 }
];

// Criar set com produtos únicos
const produtosUnicos = new Set(vendasRaw.map(item => item.produto));

console.log([...produtosUnicos]);
