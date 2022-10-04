//Seletores
const input = document.querySelector("#texto");
const btnCriptografar = document.querySelector("#criptografar");
const btnDescriptografar = document.querySelector("#descriptografar");
const mensagem = document.querySelector("#mensagem");
const btnCopiar = document.querySelector("#btn-copiar");
const btnOk = document.querySelector('#ok')


document.getElementById('ok').onclick = (e) =>{
  document.getElementById("tela-texto-copiado").style.display = 'none';
}

//captura o id e esconde a div-aparece da tela
document.getElementById("div-aparece").style.display = 'none';
inputverificar();

// caputura o id no momento do click e direciona para o metódo que encripta o texto
document.getElementById('criptografar').onclick = (e) => {
  e.preventDefault();
  const textoEncriptado = encriptar(input.value.toLowerCase());
  mensagem.value = textoEncriptado;
  input.value = "";
  aparece()
}

// caputura o id no momento do click e direciona para o metódo que desencripta o texto
document.getElementById('descriptografar').onclick = (e) => {
  e.preventDefault();
  const textoDecriptado = decodificar(input.value);
  mensagem.value = textoDecriptado;
  input.value = "";
  aparece()
}

// caputura o id no momento do click e faz a validação de copiar o texto
document.getElementById('btn-copiar').onclick = (e) => {
  e.preventDefault();
  const mensagem = document.querySelector("#mensagem");
  mensagem.select();
  navigator.clipboard.writeText(mensagem.value)
  mensagem.value = "";
  desaparece();
}

//encripta o texto
function encriptar(stringEncriptada) {
  let matrixCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
  stringEncriptada = stringEncriptada.toLowerCase()
  for (let i = 0; i < matrixCode.length; i++) {
    if (stringEncriptada.includes(matrixCode[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(matrixCode[i][0], matrixCode[i][1])
    }
  }
  return stringEncriptada
}

//decodifica o texto
function decodificar(stringDecriptada) {
  let matrixCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
  stringDecriptada = stringDecriptada.toLowerCase()
  for (let i = 0; i < matrixCode.length; i++) {
    if (stringDecriptada.includes(matrixCode[i][1])) {
      stringDecriptada = stringDecriptada.replaceAll(matrixCode[i][1], matrixCode[i][0])
    }
  }
  return stringDecriptada
}

//manipula o dom para que alguns componentes apareçam e desapareçam da tela
function aparece() {
  document.getElementById("div-desaparece").style.display = 'none';
  document.getElementById("div-aparece").style.display = 'block';
}
function desaparece() {
  document.getElementById("tela-texto-copiado").style.display = 'block';
  document.getElementById("div-desaparece").style.display = 'block';
  document.getElementById("div-aparece").style.display = 'none';
}
//manipula o dom para que alguns componentes apareçam e desapareçam da tela
function home() {
  document.getElementById("div-aparece").style.display = 'none';
  document.getElementById("div-desaparece").style.display = 'block';
}


//verifica qual foi o texto digitado pelo usuário
function inputverificar() {
  var inputPalavra = document.querySelector("#texto");
  inputPalavra.addEventListener("keypress", function (e) {
    var keyCode = (e.keyCode ? e.keyCode : e.which);

    if (keyCode > 47 && keyCode < 65) {
      e.preventDefault();
    }
  });
}

