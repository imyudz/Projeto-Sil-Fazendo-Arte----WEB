
var titulo = document.querySelector(".titulo");
titulo.textContent = "Lista de Encomendas";


//Rotina de Clculo do Valor Total
//Captura os dados do Cliente
var cliente = document.querySelector(".cliente");

//Captura a quantidadeda encomenda
var quantidade = cliente.querySelector(".quantidade").textContent;

//Captura o valor unitário
var valor = cliente.querySelector(".preço").textContent; 

//Arruma o valor formatando com a String
var valorArrumado = valor.replace(",", ".").replace("R$", "")
console.log(valorArrumado);

parseInt(quantidade);
parseFloat(valor);

console.log("Valor Total: " + (quantidade * valorArrumado));