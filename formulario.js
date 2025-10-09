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

//captura os valores digitados
var nome = formulario.nome.value;
var peso = formulario.peso.value; 
var altura = formulario.altura.value;
var gordura = formulario.gordura.value;

//criar a tag, <tr>
var pacienteTr = document.createElement("tr");

// criar a tag, <td>
var nomeTd = document.createElement("td");
var pesoTd = document.createElement("td");
var alturaTd = document.createElement("td");
var gorduraTd = document.createElement("td");
var imcTd = document.createElement("td");

//adicionar os valores as tags criadas
nomeTd.textContent = nome;
pesoTd.textContent = peso;
alturaTd.textContent = altura;
gorduraTd.textContent = gordura;
imcTd.textContent = calcularImc(peso,altura);

//adicionar as tags na tela do usuário
pacienteTr.appendChild(nomeTd);
pacienteTr.appendChild(pesoTd);
pacienteTr.appendChild(alturaTd);
pacienteTr.appendChild(gorduraTd);
pacienteTr.appendChild(imcTd);

var tabela = document.querySelector("#tabela-pacientes")
tabela.appendChild(pacienteTr);







});
