const hamburger = document.querySelector('#hamburger')
const options = document.querySelector('.contentBox')
const closeBut = document.querySelector('.closeOptions')
const helpInfo = document.querySelector('.info')
function closeOptioms() {
    options.style.display = 'none'
    hamburger.style.display = 'inline-block'
    helpInfo.style.display = 'none'
};


function showOption() {
    options.style.display = 'inline-block'
    hamburger.style.display = 'none'
}



closeBut.addEventListener('click', closeOptioms)
hamburger.addEventListener('click', showOption)

const helpBut = document.querySelector('.help')
const closeHelpBut = document.querySelector('.closeHelp')

console.log(helpInfo);

function openHelp() {
    helpInfo.style.display = 'inline-block'
};


function closseHelp() {
    helpInfo.style.display = 'none'
}


helpBut.addEventListener('click', openHelp);
closeHelpBut.addEventListener('click', closseHelp)


