function encriptar (){
    var texto = document.querySelector("#texto").value;
    var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.querySelector(".salida").value = textoCifrado;
    document.querySelector("#texto").value;

    var x = document.getElementById('mune');
    if (x.style.display === 'none') {
      x.style.display = 'block';
    } else {
      x.style.display = 'none';
    }

    var x = document.getElementById('Mensajent');
    if (x.style.display === 'none') {
      x.style.display = 'block';
    } else {
      x.style.display = 'none';
    }

}

    
var boton1 = document.querySelector("#btn-encriptar"); boton1.onclick = encriptar;


function desencriptar (){ var texto = document.querySelector("#texto").value; var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u"); document.querySelector(".salida").value = textoCifrado; document.querySelector("#texto").value;

}

var boton2 = document.querySelector("#btn-desencriptar"); boton2.onclick = desencriptar;