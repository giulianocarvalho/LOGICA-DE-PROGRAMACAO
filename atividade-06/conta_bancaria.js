class ContaBancaria {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }
    verSaldo() {
        console.log(`
    Olá ${this.titular},
    seu saldo atual é 
    R$ ${this.saldo} `)
        
    }
}
        let contaDoGiuliano = new ContaBancaria("Giuliano", 1500)
        contaDoGiuliano.verSaldo()
        contaDoGiuliano.depositar(350)
        contaDoGiuliano.verSaldo()
        
        let contaDoBahia = new contaDoBahia("Bahia", 1000)
        contaDoBahia.verSaldo()