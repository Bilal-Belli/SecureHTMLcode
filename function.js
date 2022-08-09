
// <p>Weeeee</p>

var NormalCode = '';
var resultHexEncoded = '';

function encryptHTML(){
    NormalHTMLCode = document.getElementById("htmlCode").value;
    for (var i = 0; i < NormalHTMLCode.length; i++) {
        resultHexEncoded += '%'+ NormalHTMLCode.charCodeAt(i).toString(16);
    }
    console.log(resultHexEncoded);
}

function decryptHTML(resultHexEncoded){
    console.log(unescape(hexEncoded));
}