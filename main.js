const input = document.querySelector('#texto');

var crip = document.getElementById('crip');
var descrip = document.getElementById('descrip')
var saidaTexto = document.querySelector('#saidaTexto')
var saidatexto = document.querySelector('.saidatexto')
var msg = document.querySelector('.msg')
var btncopiarTexto = document.getElementById("btncopiarTexto");
//A letra "e" é convertida para "enter"
//A letra "i" é convertida para "imes"
//A letra "a" é convertida para "ai"
//A letra "o" é convertida para "ober"
//A letra "u" é convertida para "ufat"

function criptografar(event){
    var n = input.value;

    var newStr = n.replace(/e/g , 'enter')
    .replace(/i/g , 'imes')
    .replace(/a/g , 'ai')
    .replace(/o/g , 'ober')
    .replace(/u/g , 'ufat');
    //console.log(newStr);
    saidaTexto.value= newStr
    verificar()
    
};
function descriptografar(event){
    var n = input.value;
    var newStr = n.replace(/enter/g , 'e')
    .replace(/imes/g , 'i')
    .replace(/ai/g , 'a')
    .replace(/ober/g , 'o')
    .replace(/ufat/g , 'u');
    //console.log(newStr);
    saidaTexto.value= newStr
    verificar()
};
function copiarTexto() {
    var textoCopiado = document.getElementById("saidaTexto");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)
    document.execCommand("copy");
}
const verificar = () =>{
    if(saidaTexto.value == ''){
        msg.className="msg";
        saidatexto.style.display='none'
        return true
    }else {
        msg.className="hide";
        saidatexto.style.display= 'block'
        return false
    };
};
crip.addEventListener("click", criptografar);
descrip.addEventListener("click", descriptografar);
btncopiarTexto.addEventListener("click", copiarTexto);

console.log('ativo')