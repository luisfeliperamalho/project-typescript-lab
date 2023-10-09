let produto: object = {
    name: "Luis Felipe"
};

type ProdutoLoja = {
    nome: string;
    preco: number;
    unidades: number;
}

let meuProduto: ProdutoLoja = {
    nome: "Tenis",
    preco: 499.99,
    unidades: 3
}

//arrays

let dados: string[] = ['Felipe', 'Joao'];
let dados2: Array<string> = ['Felipe', 'Joao'];

let infos: (string | number)[] = ['Felipe', 123]

//Tuplas
let boleto: [string, number, number] = ['agua conta', 150.0, 123424235]

//arrays metodos
dados.pop();
dados.sort();

//Dates
let aniversario: Date = new Date("2022-12-01 05:00");
console.log(aniversario.toString());


