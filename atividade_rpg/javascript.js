class Personagem {
    constructor(nome, titulo, hp, mana, energia){
        this.nome = nome;
        this.titulo = titulo;
        this.hp = hp;
        this.mana = mana;
        this.energia = energia;
    }
}

class Habilidade {
    constructor(id, nome, dano, custo, energia){
        this.id = id;
        this.nome = nome;
        this.dano = dano;
        this.custo = custo;
        this.energia = energia;
    }
}

// Instancia Classes - Criar Objetos
let Mael = new Personagem("Mael", "🪽 Arcanjo da Luz" ,100,100,0);
let Crowley = new Personagem("Crowley", "👹 Rei Demônio", 100,100,0);

//Preencher os Status

document.getElementById("Mael").textContent = Mael.nome;
document.getElementById("Arcanjo da Luz") = Mael.titulo;

// Criar habilidades
let listaHabilidades = [
    new Habilidade(1,"⚔️ Ataque", 4, 0, 0),
    new Habilidade(2, "🪙 skill, 8, 10, 0"),
    new Habilidade(3, "💥 supremo", 15, 0, 100),
    
];
