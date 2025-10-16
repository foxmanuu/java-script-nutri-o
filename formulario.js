//QUANDO CLICAR NO TITULO, APAREÇA UMA MENSAGEM
subtitulo.addEventListener('click', mostraMensagem);

function mostraMensagem(){
    alert("este elemento foi clicado");
}

//acessar botão
var boataoAdicionar = document.querySelector("#adicionar-paciente")
    //executa os codigos ao clicar no botão
    boataoAdicionar.addEventListener('click', function(event){
         event.preventDefault();
    //acessa o formulario
var formulario = document.querySelector("#form-adiciona");

var paciente = buscarValoresFormularios(formulario);

var pacienteTr = criarTr(paciente);
//variavel para acessar o tdBody r criar a tabela
var tabela = document.querySelector("#tabela-pacientes");
tabela.appendChild(pacienteTr);


});

function buscarValoresFormularios(formulario){
//captura os valores digitados
var paciente = {
    nome: formulario.nome.value,
    peso: formulario.peso.value,
    altura: formulario.altura.value,
    gordura:formulario.gordura.value,
    imc: calcularImc(formulario.peso.value, formulario.altura.value)
}

return paciente; 

}

function criarTr(paciente){
//criar a tag, <tr>
var pacienteTr = document.createElement("tr");

// criar a tag, <td>
var nomeTd = document.createElement("td");
var pesoTd = document.createElement("td");
var alturaTd = document.createElement("td");
var gorduraTd = document.createElement("td");
var imcTd = document.createElement("td");


//adicionar os valores as tags criadas
nomeTd.textContent = paciente.nome;
pesoTd.textContent = paciente.peso;
alturaTd.textContent = paciente.altura;
gorduraTd.textContent = paciente.gordura;
imcTd.textContent = paciente.imc;

//adicionar as tags na tela do usuário
pacienteTr.appendChild(nomeTd);
pacienteTr.appendChild(pesoTd);
pacienteTr.appendChild(alturaTd);
pacienteTr.appendChild(gorduraTd);
pacienteTr.appendChild(imcTd);

return pacienteTr;

}
