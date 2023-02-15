
var titulo = document.querySelector(".titulo");
titulo.textContent = "Lista de Encomendas";

function formataPreco (preco){
    let precoAjustado = preco.replace(",", ".").replace("R$", "");
    return precoAjustado
}
/****************************************CAPTURAR UM CLIENTE SÓ *************************************/
//Rotina de Clculo do Valor Total
//Captura os dados do Cliente
//var cliente = document.querySelector(".cliente");

// //Captura a quantidadeda encomenda
// var quantidade = cliente.querySelector(".quantidade").textContent;

// //Captura o valor unitário
// var valor = cliente.querySelector(".preço").textContent; 

// //Arruma o valor formatando com a String
// var valorArrumado = valor.replace(",", ".").replace("R$", "");
// console.log(valorArrumado);

// //Converte após formatar String
// parseFloat(quantidade);
// parseFloat(valor);

// //Efetua operação matemática e faz um replace no valor do conteúdo de texto de uma classe para o valor total 
// total = quantidade * valorArrumado;
// cliente.querySelector(".total").textContent = "R$ "+total;
// //Printa o total
// console.log("Valor Total: " + total);

/****************************************CAPTURAR MAIS DE UM CLIENTE*************************************/

var clientes = document.querySelectorAll(".cliente"); //QUERY SELECTOR ALL GERA UM ARRAY COM CADA ELEMENTO DE CLASSE CLIENTE

for(let i = 0; i < clientes.length; i++){ //RODA UM FOR PARA VARRER O ARRAY E LER OS DADOS

    //PRINTA NO LOG O CLIENTES[POSIÇÃO] <-- ISSO DEVE SER USADO PORQUE ESTOU TRABALHANDO COM A POSIÇÃO DOS ARRAYS
    //USA O QUERYSELECTOR PARA SELECIONAR UMA CLASSE DENTRO DE UMA OUTRA CLASSE HTML, ASSIM COMO O ELEMENTO "QUANTIDADE" ESTÁ DENTRO DA CLASSE CLIENTE
    //console.log(clientes[i].querySelector(".quantidade"));

    //DESAFIO HARDCORE:
    //1º: Mostrar a quantidade e o preço de cada cliente e Valor Total
    let quant = clientes[i].querySelector(".quantidade").textContent; //pega a quantidade no momento i da array
    let preco = clientes[i].querySelector(".preço").textContent;//pega o preço no momento i da array
    let ajustado = formataPreco(preco);//roda uma função de parametro textContent da classe preco e executa um replace dentro dessa função
    console.log(quant+", "+preco+" Valor Total: R$ "+ (quant * ajustado));

    //Joga esse valor total para a classe total do html, usando o queryselector, partindo do cliente (seleciona um elemento do cliente) atribuindo o valor total para a propriedade textContent do elemento
    clientes[i].querySelector(".total").textContent = "R$ "+(quant * ajustado); 
}