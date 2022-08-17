

function getInputValueById(elementId) {
    const input = document.getElementById(elementId);
    const inputValue = parseFloat(input.value);
    input.value = '';
    return inputValue;
}


function getTextValueById(elementId) {
    return parseFloat((document.getElementById(elementId)).innerText);
}


function setTextValueById(elementId, newValue) {
    document.getElementById(elementId).innerText = newValue;

}