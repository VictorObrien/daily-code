const bin = document.getElementById("binary-number");
const dec = document.getElementById("decimal-number");

function SomenteNumero(e){
  var tecla=(window.event)?event.keyCode:e.which;
  if((tecla==48 || tecla==49 || tecla===13)) return true;
  else{
    alert("Escolha o número 1 ou 0")
    return false;
  }
}

function bin2Dec(bin){
  var decimal = parseInt(bin, 2);
  return dec.innerHTML= decimal;
}
