// .map(): Cria uma lista com os dados alterados 
const metros = [1, 5, 10];
const centimetros = metros.map(m => m * 100);
centimetros.forEach(c => console.log(`4{c}cm`));

// .filter(): Cria uma lista com os itens especificados 
const notas = [8, 4, 9, 5];
const notas_baixas = notas.filter(n => n < 6);     
notas_baixas.forEach(n => console.log(n)); 

// .find(): Retorna apenas o primeiro itemque passa na condição 
const alunos = ["João", "Maria", "Jose"];
const busca = alunos.find(nome => nome === "Maria");
console.log(busca);

// .every(): Retorna se todos passam no predicado
const entregas = [true, true, false];
const todosEntegaram = entregas.every(e => e === true);
console.log(todosEntegaram);

// .toUpperCase .toLowerCase
// coloca as letras em maiuscula/minusculas
const nomes = ["ana", "Bia"];
const maiuscula = nomes.map(n => n.toUpperCase());
nomes.forEach(n => console.log(n.toUpperCase()));
nomes.map(n => n.toLowerCase())
.forEach(n => console.log(n));

// .starsWith() .endsWith(): retorna quem começa/termina com...
const arquivos = ["foto.jpg", "texto.txt", "ferias.jpg"];
const apenasFotos = arquivos 
.filter(arq => arq.endsWith(".jpg"));
apenasFotos.forEach(arq => console.log(arq));

// .includes(): Verifica se um texto contém outro 
const produtos = ["Monitor Dell", "Mouse Razer", "Teclado Dell"];
produtos 
.filter(p => p.includes("Dell"))
.map(s => s.toUpperCase())
.forEach(i => console.log(i));

// .replace(): Troca uma parte do texto por outra
let telefone = "(61) 1234-5678";
const escondido = telefone.replace("(61)", "(**)");
console.log(escondido);
