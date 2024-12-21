const { produto } = require('./Produtos')

class Pessoa {
    #email
    //Metodo principal da classe

    constructor(id, nome, telefone, email, produto) {
        this.id = id;
        this.nome = nome;
        this.telefone = telefone;
        this.#email = email;
        this.produto = produto;

    }
    falar() {
        console.log(`A pessoa ${this.email} está falando`)
    }
    estudar() {
        console.log(`A pessoa ${this.nome} está estudando`)
    }
    // Modificadores de acesso
    // getters

    get getEmail() {
        return this.#email
    }

    mostrarPessoa(){
        console.log(
            `
            ID: ${this.id} \n
            Nome: ${this.nome} \n
            Telefone: ${this.telefone} \n
            Email: ${this.getEmail} \n
            Produto: ${this.Produto}`
        )
    }

    // setters
}

const caderno = new produto ('1', 'Caderno', '10 matérias', 20)

const Luana = new Pessoa(1, 'Luana', 8499999-9999, 'luana@email.com', caderno.nome)

// const pessoa1 = new Pessoa(1, 'Fulano', '(84)99999-9999', 'fulano1@gmail.com')


// const pessoa2 = new Pessoa(2, 'Fulano 2', '(84)99999-9998', 'fulano2@gmail.com')

// pessoa1.estudar();
// pessoa2.estudar();

// console.log(pessoa1.nome)

// console.log(pessoa1.getEmail)

Luana.mostrarPessoa()