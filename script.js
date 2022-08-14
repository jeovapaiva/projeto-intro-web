
// Tema: Meu estado - Rio Grande do Norte - RN.
//const media = idade1 + idade2 + idade3 / 3; 

console.log("\t\t\t\t\tRio Grande do Norte - RN\n\n");
console.log("Descrição:\n\n   Rio Grande do Norte é um estado na extremidade nordeste do Brasil. A capital, Natal, fica numa costa repleta de praias onde se encontra o Forte dos Reis Magos, em forma de estrela, um forte português do século XVI. Ponta Negra é uma praia enquadrada pela enorme duna, Morro do Careca, um símbolo da cidade. A sul, a Praia de Pipa é uma estância célebre pelo surf e pelos golfinhos.\n\n");
console.log("Área: 52.797 km²\n\n");
console.log("Capital: Natal\n\n");
console.log("Populção: 3,409 milhões (1 de julho de 2014)\n\n");
console.log("\t\t\t\t\tInsira aqui os seus dados:");

console.log("Primeiro nome!");
console.log("Insira o seu nome:");
var nome1 = prompt();
console.log(nome1);

console.log("Insira o sua idade:");
var idade1 = +prompt();
console.log(idade1);

console.log("Você é do estado?");
console.log("Sim: 1\nNão: 2\n\n");
var pesquisa1 = +prompt();
console.log(pesquisa1); 

console.log("Segundo nome");
console.log("Insira o seu nome:");
var nome2 = prompt();
console.log(nome2);

console.log("Insira o sua idade:");
var idade2 = +prompt();
console.log(idade2);

console.log("Você é do estado?");
console.log("Sim: 1\nNão: 2\n\n");
var pesquisa2 = +prompt();
console.log(pesquisa2);

console.log("Terceiro nome");
console.log("Insira o seu nome:");
var nome3 = prompt();
console.log(nome3);

console.log("Insira o sua idade:");
var idade3 = +prompt();
console.log(idade3);

console.log("Você é do estado?");
console.log("Sim: 1\nNão: 2\n\n");
var pesquisa3 = +prompt();
console.log(pesquisa3);
 
var pesquisaTotal = []
pesquisaTotal.push(nome1,nome2,nome3)
pesquisaTotal.push(idade1,idade2,idade3)
pesquisaTotal.push(pesquisa1,pesquisa2,pesquisa3)

console.log("levantamento das pesquisas:", pesquisaTotal); 

media = (idade1 + idade2 + idade3) / 3; 

console.log("Essa é a média de idade dos visitantes:\n\n", media);      

console.log(pesquisa1,pesquisa2,pesquisa3 === 1? "Todos são do estado!" : "Visitantes variados:")
