'use strict'

const testInput = document.querySelector("#testInput");
const okButton = document.querySelector("#okButton");
okButton.addEventListener('click', () => {
    const message = testInput.value;
    window.electronAPI.sendMessage(message);
}, false);