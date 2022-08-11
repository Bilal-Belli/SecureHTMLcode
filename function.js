let NormalCode = '';
let resultHexEncoded = '';

function basicEncriptionHTML(NormalHTMLCode){
    // NormalCode = '';
    // NormalHTMLCode = document.getElementById("htmlCode").value;
    resultHexEncoded = '';
    resultHexEncoded += '<script language="javascript">document.write(unescape(\'';
    for (var i = 0; i < NormalHTMLCode.length; i++) {
        resultHexEncoded += '%'+ NormalHTMLCode.charCodeAt(i).toString(16);
    }
    resultHexEncoded += '\'));</script>';
    resultHexEncoded = resultHexEncoded.replace(/\%\a/g,''); //remove new line caracter
    return resultHexEncoded;
    // document.getElementById("resultOfFunction").innerHTML = resultHexEncoded;
}
function encryptHTML(){
    NormalCode = '';
    NormalHTMLCode = document.getElementById("htmlCode").value;
    let kk = document.getElementById("keyNumber").value;
    kk++;
    for ( let j=0 ; j<kk ; j++ ) {
        NormalHTMLCode = basicEncriptionHTML(NormalHTMLCode);
    }
    document.getElementById("resultOfFunction").innerHTML = NormalHTMLCode;
}

function basicDecryptHTML(){
    // NormalCode = '';
    // NormalCode = document.getElementById("htmlCode").value;
    NormalCode = NormalCode.replace('<script language="javascript">document.write(unescape(\'','');
    NormalCode = NormalCode.replace('\'));</script>','');

    resultHexEncoded = unescape(NormalCode);  
    return resultHexEncoded;
    // document.getElementById("resultOfFunction").innerHTML = resultHexEncoded;
}
function decryptHTML(){
    NormalCode = '';
    NormalCode = document.getElementById("htmlCode").value;
    let mm = document.getElementById("keyNumber").value;
    mm++;
    for (let r=0 ; r<mm ; r++){
        NormalCode = basicDecryptHTML(NormalCode);
    }
    document.getElementById("resultOfFunction").innerHTML = NormalCode;
}

function fetchEncriptFunction(){
    let output = "";
    document.getElementById("labelCodeType").innerHTML = `HTML Code` ;
    document.getElementById("labelResult").innerHTML = `Result (Encoded HTML)` ;

    output += `<textarea class="form-control" id="htmlCode" oninput="encryptHTML()" rows="6"></textarea>`;
    document.querySelector('.form-outline.form-white.mb-4.firstOPdiv').innerHTML = `<textarea class="form-control" id="htmlCode" oninput="encryptHTML()" rows="6"></textarea>`;
    
    output = "";
    output += `<textarea class="form-control" id="resultOfFunction" rows="6"></textarea>`;
    document.querySelector('.form-outline.form-white.secondOPdiv').innerHTML = `<textarea class="form-control" id="resultOfFunction" readonly rows="6"></textarea>`;
}

function fetchDecriptFunction(){
    let output = "";
    document.getElementById("labelCodeType").innerHTML = `Encrypted Code` ;
    document.getElementById("labelResult").innerHTML = `Result (HTML Code)| note: it decrypt one time` ;

    output += `<textarea class="form-control" id="htmlCode" oninput="decryptHTML()" rows="6"></textarea>`;
    document.querySelector('.form-outline.form-white.mb-4.firstOPdiv').innerHTML = output;

    output = "";
    output += `<textarea class="form-control" id="resultOfFunction" readonly rows="6"></textarea>`;
    document.querySelector('.form-outline.form-white.secondOPdiv').innerHTML = output;
}