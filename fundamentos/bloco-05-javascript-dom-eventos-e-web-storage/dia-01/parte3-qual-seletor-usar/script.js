const headerColor = document.querySelector('#header-container');
const emergencyTasksColor = document.querySelectorAll('.emergency-tasks');
const noEmergencyTasksColor = document.querySelectorAll('.no-emergency-tasks');
const textTasks = document.querySelectorAll('h3');
const footerColor = document.querySelector('#footer-container');

headerColor.style.backgroundColor = '#00AE70';

for (let i = 0; i < emergencyTasksColor.length; i += 1) {
    emergencyTasksColor[i].style.backgroundColor = '#A930EB'
};

for (let i = 0; i < noEmergencyTasksColor.length; i += 1) {
    noEmergencyTasksColor[i].style.backgroundColor = '#FFD86E'
};

for (let i = 0; i < textTasks.length; i += 1) {
    if (i < 2) {
        textTasks[i].style.backgroundColor = '#FF9E86'
    } else {
        textTasks[i].style.backgroundColor = '#232525'
    }
};

footerColor.style.backgroundColor = '#003533';