let botaoCalcular = document.getElementById("botaoCalcular");

function calcularIMC(){
  let peso = document.getElementById("peso").value;
  
  let altura= document.getElementById("altura").value/100;
  
  let resultado = document.getElementById("resultado");

  
  if(altura!== "" && peso !==""){
    let IMC = (peso/(altura*altura)).toFixed(2);
    let mensagem = "";
    if(IMC <18.5){
      mensagem = "Você está abaixo do peso."
    } else if (IMC > 18.5 && IMC <25){
      mensagem = "Você está com o peso ideal!"
    } else if(IMC > 25 && IMC < 30) {
      mensagem = "Você está um pouco acima do peso."
    } else if( IMC >30 && IMC <35){
      mensagem = "Cuidado! Isso significa que você pode ter Obesidade Grau I";
    } else if (IMC > 35 && IMC <40){
      mensagem = "Cuidado! Isso significa que você pode ter Obesidade Grau II";
    } else {
      mensagem = "Cuidado! Isso significa que você pode ter Obesidade Grau III";
    }
  
    resultado.textContent = `Seu IMC é ${IMC}. ${mensagem}`;
    
  } else{
    resultado.textContent = `Preencha todos os campos, por favor.`; 
  } 
  
}

botaoCalcular.addEventListener("click", calcularIMC);