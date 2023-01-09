

let cajaResultado = document.querySelector(".caja-resultado");
const btnEncriptar = document.querySelector(".encriptar");
const btnDesencriptar = document.querySelector(".desencriptar");

const vocales = ["e","i","a","o","u"];
const cripto = ["enter","imes","ai","ober","ufat"];


const remplazarDesencriptar = (clave , vocal , cadena) => {

    for (let i = 0; i < cadena.length; ++i) {
        if (cadena.substring(i, i + clave.length) === clave) {
            cadena = cadena.substring(0, i) + vocal + cadena.substring(i + clave.length, cadena.length);
        }
    }
    return cadena;
}

const remplazarEncriptar = (textArea) => {
    let fraseEncriptada = "";

    for(let i=0; i<textArea.length; i++){
        
        if(textArea[i] == 'e'){
             fraseEncriptada += 'enter';
        }else if(textArea[i] == 'i'){
             fraseEncriptada += 'imes';
        }else if(textArea[i] == 'a'){
             fraseEncriptada += 'ai';
        }else if(textArea[i] == 'o'){
             fraseEncriptada += 'ober';
        }else if(textArea[i] == 'u'){
             fraseEncriptada += 'ufat';
        } else {
             fraseEncriptada += textArea[i];
        }      
     }
     return fraseEncriptada;
}

const imprimir = (textArea) => {
    cajaResultado.innerHTML = `
        <textarea class="texto-encriptado">${textArea}</textarea>
        <div class="boton-copiar">
            <button class="copiar" onclick="copiarTexto()">Copiar</button>
        </div>
     `;
}

const encriptar = () => {    

    let textArea = document.querySelector("#textoAEncriptar").value;   
    imprimir(remplazarEncriptar(textArea));    
    document.querySelector("#textoAEncriptar").value = '';
}


const desEncriptar = () => {
    let textArea = document.querySelector("#textoAEncriptar").value;   
    for(let i=0; i<cripto.length; i++){
        textArea = remplazarDesencriptar( cripto[i], vocales[i], textArea);        
    }
    imprimir(textArea);
    document.querySelector("#textoAEncriptar").value = '';

}

const copiarTexto = () => {
    let textoEncriptado = document.querySelector(".texto-encriptado");    
    textoEncriptado.select();
    document.execCommand("copy");
}

btnEncriptar.addEventListener('click', encriptar);
btnDesencriptar.addEventListener('click', desEncriptar);