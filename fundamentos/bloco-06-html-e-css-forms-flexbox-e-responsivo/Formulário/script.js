const statesBR = ['', 'AC','AL','AP','AM','BA','CE','ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO', 'DF']
const submmitBtn = document.getElementById('submmitBtn')


function addStates () {
    for (let i = 0; i < statesBR.length; i += 1) {
        const addOption = document.createElement('option')
        const states = document.getElementById('states')
        states.appendChild(addOption)
        states[i].innerText = statesBR[i]
        states[i].value = statesBR[i]
        states[i].id = statesBR[i]
    }
}

function prevent (event) {
event.preventDefault();
}

addStates();
submmitBtn.addEventListener('click', prevent);
