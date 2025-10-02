var subtitulo = document.querySelector(".subtitulo");
			subtitulo.textContent = "Meus Pacientes";
			var logo = document.querySelector(".titulo");
			logo.textContent = "Svt nutricion";

	var pacientes = document.querySelectorAll(".paciente");

	for(var i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i];

    //seleciona o conteúdo peso da tag
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    // seleciona o conteúdo altura da tag
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    //calcula o imc
    var imc = peso / (altura * altura);

    //variáveis com valor true
    var pesoValido = true;
    var alturaValida = true; 

    if(pesoValido && alturaValida){
        // acessa e altera o imc
        var tdImc = paciente.querySelector(".info-imc");
        tdImc.textContent = imc.toFixed(2);
    }
    //define limites de peso e altura
    if(peso <= 0 || peso >= 1000){
        var pesoValido = false;
        tdImc.textContent = "Peso Inválido!";
        paciente.classList.add("campo-invalido");
        paciente.style.backgroundColor = "red";
    }
    if(altura <= 0 || altura >= 3.00){
        var alturaValida = false;
        tdImc.textContent = "Altura Inválida";
        paciente.classList.add("campo-invalido");
    }
    }
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
imcTd.textContent = imc;


});

    