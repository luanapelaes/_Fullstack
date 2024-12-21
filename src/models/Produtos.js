class produto {
    #preco
    constructor(cod_barra, nome, descricao, preco) {
        this.cod_barra = cod_barra;
        this.nome = nome;
        this.descricao = descricao;
        this.#preco = preco;
    }
    get getPreco(){  //Para pegar dados privados
        return this.#preco
    }
    mostrarDados(){
        console.log(`Código de barra:  ${this.cod_barra}  \n
            Nome: ${this.nome} \n
            Descrição: ${this.descricao} \n
            Preço: ${this.#preco}
            `)
    }
}

module.exports = { produto }

// const Produto1 = new produto (1, 'caderno', '10 matérias', 20)

//  const Produto2 = new produto (2, 'caneta', 'uma unidade + refil', 2)

// Produto1. mostrarDados();
// Produto2. mostrarDados();

// console.log(Produto1.nome);
// console.log(Produto1.getPreco);
