const hamburger = document.querySelector('#hamburger')
const options = document.querySelector('.contentBox')
const closeBut = document.querySelector('.closeOptions')

function closeOptioms() {
    options.style.display = 'none'
    hamburger.style.display = 'inline-block'
};


function showOption() {
    options.style.display = 'inline-block'
    hamburger.style.display = 'none'
}



closeBut.addEventListener('click', closeOptioms)
hamburger.addEventListener('click', showOption)