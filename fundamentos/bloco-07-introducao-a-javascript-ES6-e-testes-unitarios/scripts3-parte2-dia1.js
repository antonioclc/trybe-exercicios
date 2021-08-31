const clickButton = document.getElementById('click-button');
const clicks = document.getElementById('clicks');
let click = 0;

const clickCount = () => clicks.innerHTML = `<strong>${click += 1}<strong>`

clickButton.addEventListener('click', clickCount)