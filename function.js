let NormalCode = '';
let resultHexEncoded = '';

function encryptHTML(){
    NormalHTMLCode = document.getElementById("htmlCode").value;
    resultHexEncoded = '';
    resultHexEncoded += '<script language="javascript">document.write(unescape(\'';
    for (var i = 0; i < NormalHTMLCode.length; i++) {
        resultHexEncoded += '%'+ NormalHTMLCode.charCodeAt(i).toString(16);
    }
    resultHexEncoded += '\'));</script>';
    resultHexEncoded = resultHexEncoded.replace(/\%\a/g,''); //remove new line caracter
    document.getElementById("resultOfFunction").innerHTML = resultHexEncoded;
}

function fetchEncriptFunction(){

}
function fetchDecriptFunction(){

}

// function decryptHTML(){
//     resultHexEncoded = document.getElementById("resultOfFunction").value;
//     NormalCode = '';
//     resultHexEncoded -= 
//     NormalCode = unescape(resultHexEncoded);
//     document.getElementById("htmlCode").innerHTML = NormalCode;
//     console.log(unescape(hexEncoded));
// }