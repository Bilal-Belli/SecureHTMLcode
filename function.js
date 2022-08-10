let NormalCode = '';
let resultHexEncoded = '';

function encryptHTML(){
    NormalCode = '';
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

function decryptHTML(){
    NormalCode = '';
    NormalCode = document.getElementById("htmlCode").value;
    NormalCode = NormalCode.replace('<script language="javascript">document.write(unescape(\'','');
    NormalCode = NormalCode.replace('\'));</script>','');

    resultHexEncoded = unescape(NormalCode);  
    document.getElementById("resultOfFunction").innerHTML = resultHexEncoded;
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