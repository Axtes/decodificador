const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
}

function encriptar(stringEncriptada) {

    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptada
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(mensagem.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDesencriptada;
}

function copiarTexto() {
    navigator.clipboard.writeText(mensagem.value); 
}

let canvas = document.querySelector("canvas");

let ctx = canvas.getContext("2d");
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;
let str = "pnK+Aws + js:2 @bnp -11 scr UU N5p RsTxW iOU98 P87 xkwYnP -_/WxY ÜonP ×š § ¿? #31 tYr stXyn syStem32 win64 snVoX dxdiag ! ^dWx @ # * . , #SxEw YJ # * $ % (! ;) .:: ;º  & ¨=+- _- Ингрид — любовь всей моей жизни ,";
let matrix = str.split("");
let font = 12;
let col = width / font;
let arr = [];

for(let i = 0; i < col; i++) {
    arr[i] = 1;
}

const draw = () => {
    ctx.fillStyle = "rgba(0,0,0,0.05";
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = "#00FF00";
    ctx.font = `${font}px system-ui`;

    for(let i = 0; i < arr.length; i++) {
        let txt = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(txt, i * font, arr[i] * font);

        if(arr[i] * font > height && Math.random() > 0.975) {
            arr[i] = 0;
        }
        arr[i]++;
    }
}

setInterval(draw, 20);

window.addEventListener("resize", () => location.reload());