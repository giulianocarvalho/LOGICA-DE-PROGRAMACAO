class Personagem {
    constructor(nome, titulo, hp, mana, energia) {
        this.nome = nome;
        this.titulo = titulo;
        this.hp = hp;
        this.mana = mana;
        this.energia = energia;
    }
}

class Habilidade {
    constructor(id, nome, dano, custo, energia) {
        this.id = id;
        this.nome = nome;
        this.dano = dano;
        this.custo = custo;
        this.energia = energia;
    }
}

// Instâncias das classes
let Mael = new Personagem("Mael", "🪽 Arcanjo da Luz", 100, 100, 0);
let Crowley = new Personagem("Crowley", "👹 Rei Demônio", 100, 100, 0);

// Preencher os status
document.getElementById("Mael").textContent = Mael.nome;
document.getElementById("tituloMael").textContent = Mael.titulo;

// Criar habilidades
let containerBtn = document.getElementById("controles");
let listaHabilidades = [
    new Habilidade(1, "⚔️ Ataque", 4, 0, 0),
    new Habilidade(2, "🪙 Skill", 8, 10, 0),
    new Habilidade(3, "💥 Supremo", 15, 0, 100),
];

// Mostrar habilidades na tela
listaHabilidades.forEach(hab => {
    let btn = document.createElement("button");
    btn.innerText = hab.nome;

    containerBtn.appendChild(btn);
});