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

            if (alvo.hp < 0) {
                alvo.hp = 0;
            }

            if (habilidade.custo > 0) {
                this.mana -= habilidade.custo;
                this.energia += 50;
            }

            this.energia -= habilidade.energia;

            if (this.energia > 100) {
                this.energia = 100;
            }

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

    boss_atacar(alvo) {

        if (this.hp <= 0) return;

        if (this.energia >= 100) {

            alvo.hp -= 15;

            if (alvo.hp < 0) {
                alvo.hp = 0;
            }

            this.energia = 0;

            console.log(
                `${this.nome} atacou ${alvo.nome}`
            );

        } else {

            this.energia += 50;

            if (this.energia > 100) {
                this.energia = 100;
            }

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

// =========================
// PERSONAGENS
// =========================

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

// =========================
// STATUS NA TELA
// =========================

document.getElementById("Mael").textContent = Mael.nome;
document.getElementById("tituloMael").textContent = Mael.titulo;

document.getElementById("Crowley").textContent = Crowley.nome;
document.getElementById("tituloCrowley").textContent = Crowley.titulo;

// =========================
// HABILIDADES
// =========================

let listaHabilidades = [
    new Habilidade(1, "⚔️ Ataque", 4, 0, 0),
    new Habilidade(2, "🪙 Skill", 8, 10, 0),
    new Habilidade(3, "💥 Supremo", 15, 0, 100)
];

// =========================
// BOTÕES
// =========================

let containerBtn = document.getElementById("controles");

listaHabilidades.forEach(hab => {

    let btn = document.createElement("button");

    btn.innerText = hab.nome;

    btn.classList.add(
        "btn",
        "btn-primary",
        "mb-2"
    );

    btn.addEventListener("click", () => {

        if (Mael.hp <= 0 || Crowley.hp <= 0) {
            return;
        }

        Mael.hero_atacar(Crowley, hab);

        if (Crowley.hp > 0) {
            Crowley.boss_atacar(Mael);
        }

        atualizarTela();

    });

    containerBtn.appendChild(btn);

});

// =========================
// ATUALIZAR TELA
// =========================

function atualizarTela() {

    document.getElementById("hp-hero").value = Mael.hp;
    document.getElementById("mp-hero").value = Mael.mana;
    document.getElementById("en-hero").value = Mael.energia;

    document.getElementById("hp-boss").value = Crowley.hp;
    document.getElementById("mp-boss").value = Crowley.mana;
    document.getElementById("en-boss").value = Crowley.energia;

    if (Mael.hp <= 0) {
        game_over();
    }

    if (Crowley.hp <= 0) {
        victory();
    }
}

// =========================
// GAME OVER
// =========================

async function game_over() {

    try {

        const resposta = await fetch("gameover.html");

        const htmlContent = await resposta.text();

        document.getElementById("tela").innerHTML = htmlContent;

    } catch (erro) {

        document.getElementById("tela").innerHTML = `
            <div class="container mt-5 text-center">
                <h1 class="text-danger">GAME OVER</h1>
            </div>
        `;

    }
}

// =========================
// VITÓRIA
// =========================

function victory() {

    document.getElementById("tela").innerHTML = `
        <div class="container mt-5 text-center">
            <h1 class="text-success">🏆 VITÓRIA!</h1>
            <h3>Crowley foi derrotado!</h3>
        </div>
    `;

}

// =========================
// INICIAR TELA
// =========================

atualizarTela();