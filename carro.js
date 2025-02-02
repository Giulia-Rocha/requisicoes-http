class Carro{
    id
    marca 
    modelo
    categoria
    ano
    quilometragem
    valor
    constructor(id,marca,modelo,categoria,ano,quilometragem,valor){
        this.id = id;
        this.marca = marca;
        this.modelo = modelo;
        this.categoria = categoria;
        this.ano = ano;
        this.quilometragem = quilometragem;
        this.valor =valor;

    }

}

module.exports = Carro;