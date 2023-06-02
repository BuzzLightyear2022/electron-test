'use strict'

const testInput = document.querySelector("#testInput");
const okButton = document.querySelector("#okButton");
okButton.addEventListener('click', () => {
    console.log(testInput.value);
}, false);