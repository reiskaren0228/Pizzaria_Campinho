//getElementById

/*const getvalorConta  = document.getElementById("valorConta");

function exibirValordaConta(){
    console.log(getvalorConta.value)
}
getvalorConta.addEventListener("change", getvalorConta)

//addEventListener

exibirValordaConta();*/

//função para da um get nos valores dos inputs

/*function sendForm() {
    const pegaValorConta = document.getElementById("valorConta");
    const pegaValorTaxa = document.getElementById("taxaConta");
    const pegaqtdPessoas = document.getElementById("qtdPessoas");

    if(pegaValorConta.value == "") {
        alert("*** Error *** Insira o valor da conta!");
    } 
    else if (pegaValorTaxa.value == ""){
        alert("*** Error *** Insira o valor da taxa!")
    }
    else if (pegaqtdPessoas.value == "") {
        alert("*** Error *** Insira a quantidade de pessoas!")
    }
}*/

//função para calcular os valores

function calculaConta() {
    const pegaValorConta = document.getElementById("valorConta");
    const pegaValorTaxa = document.getElementById("taxaConta");
    const pegaqtdPessoas = document.getElementById("qtdPessoas");
    const calcularValorTotal = (parseInt(pegaValorConta.value) + parseInt(pegaValorTaxa.value)) / parseInt(pegaqtdPessoas.value);

    document.getElementById("resultado").innerHTML = calcularValorTotal;
}

//função para pegar a ação do botão

function formEvent() {
    const formulario = document.getElementById("form_pizzaria");
    
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        calculaConta()
        });
}

