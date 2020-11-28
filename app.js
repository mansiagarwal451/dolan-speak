var btnTranslator = document.querySelector('#btn-translator');
var txtInput = document.querySelector('#txt-input');
var outputDiv = document.querySelector('#output');

var serverURL = "https://api.funtranslations.com/translate/dolan.json";

function getURL(input) {
    return serverURL + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("An error occured", error);
    alert("Something went wrong! Please try again later.");

}
function clickHandler () {
    var input = txtInput.value;
    console.log('clicked!')
    fetch(getURL(input)).then(response => response.json()).then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
    }).catch(errorHandler)
}


btnTranslator.addEventListener("click", clickHandler)