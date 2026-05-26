class Personagem {
    constructor(nome, titulo, hp, mana, energia) {
        this.nome = nome;
        this.titulo = titulo;
        this.hp = hp;
        this.mana = mana;
        this.energia = energia;
    }

    hero_atacar(alvo, habilidade) {

        if (
            this.mana >= habilidade.custo &&
            this.energia >= habilidade.energia
        ) {

            alvo.hp -= habilidade.dano;

            // Debilitar Mana
            if (habilidade.custo > 0) {
                this.mana -= habilidade.custo;
                this.energia += 50;
            }

            this.energia -= habilidade.energia;

            console.log(
                `${this.nome} usou ${habilidade.nome} em ${alvo.nome}`
            );

            console.log(
                `${alvo.nome} ficou com ${alvo.hp} HP`
            );

        } else {

            console.log("Sem mana ou energia.");

        }
    }
    boss_atacar(alvo){
        if(this.energia >= 100){
            alvo.hp -= 15;
            this.energia = 0;
        } else {
            this.energia += 50;
        }
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
let Mael = new Personagem(
    "Mael",
    "🪽 Arcanjo da Luz",
    100,
    100,
    100
);

let Crowley = new Personagem(
    "Crowley",
    "👹 Rei Demônio",
    100,
    100,
    100
);

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

    btn.classList.add("btn", "btn-primary");

    btn.addEventListener("click", () => {

        Mael.hero_atacar(Crowley, hab);

        atualizarTela();

    });

    containerBtn.appendChild(btn);

});

const atualizarTela = () => {

    document.getElementById("hp-boss").value = Crowley.hp;

    document.getElementById("mp-hero").value = Mael.mana;

    document.getElementById("en-hero").value = Mael.energia;

};