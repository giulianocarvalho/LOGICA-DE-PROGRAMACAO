const nomeJogador = "Alex";
let pontos = 0;
pontos = pontos + 10;
pontos += 50;
console.log(nomeJogador, "true", "tem", pontos, "pontos");
//template literal
const preco = 100;
const desconto = 20;
console.log(`o produto custa R$ ${preco - desconto} e com desconto de R$ ${desconto}`);


const nomeAluno = "Maria";
const disciplina = "Matemática";
nota = 8;
nota2 = 5
const resultado = `
--- boletim escolar ---;
 aluno ${nomeAluno};
 disciplina ${disciplina};
 nota 1: ${nota};
status ${nota >= 6 ? "aprovado" : "reprovado"};
`;
console.log(resultado);
