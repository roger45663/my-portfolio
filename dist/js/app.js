// DOM setup
var body = document.querySelector('body');
var hamBtn = document.querySelector('.btnHam');


// show nav
function showMenu() {
    body.classList.toggle('showNav');
}

// listener setup
hamBtn.addEventListener('click', showMenu);