class ContaBancaria {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(valor) {
        this._saldo = valor;
    }

    sacar(valor) {
        if(valor > this._saldo) {
            return 'Saldo insuficiente, a operação foi negada.';
        }

        this._saldo = this._saldo - valor;

        return this._saldo;
    }

    depositar(valor) {
        if(valor <= 0) {
            return 'Valor inválido!';
        }

        this._saldo = this._saldo + valor

        return this._saldo;
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero);
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito() {
        returnthis._cartaoCredito;
    }

    set cartaoCredito(valor) {
        this._cartaoCredito = valor;
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'poupança';
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'universitária';
    }

    sacar(valor) {
        if(valor > 500) {
            return 'Valor ultrapaça limite para este tipo de conta, operação foi negada.'
        }

        this._saldo = this._saldo - valor;

        return this._saldo;
    }
}