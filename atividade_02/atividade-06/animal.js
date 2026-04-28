class Animal {
    constructor(apelido) {
    }
    Falar(som) {
        console.log(som);
    }
}
class Gato extends Animal {
    ronrronar() {
        console.log(`o ${this.nome} está ronrronando`)
    }
    }
    
    class Cachorro extends Animal {
        abanarRabo() {
            console.log(`o ${this.nome} está feliz`)
        }
    }
    let miya = new Gato("Miya");
    let pandora = new Cachorro("Pandora");

    miya.falar("Miau");
    miya.ronrronar();
    pandora.falar("Au Au");
    pandora.abanarRabo();
    
    
