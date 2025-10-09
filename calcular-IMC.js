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
    var imc = calcularImc(peso,altura);

    //variáveis com valor true
    var pesoValido = true;
    var alturaValida = true; 

    if(pesoValido && alturaValida){
        // acessa e altera o imc
        var tdImc = paciente.querySelector(".info-imc");
        tdImc.textContent = calcularImc(peso,altura);
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
    
    function calcularImc(peso,altura){
        var imc = 0;

       imc = peso/(altura*altura);
       
       return imc.toFixed(2);

    }
    
    
    