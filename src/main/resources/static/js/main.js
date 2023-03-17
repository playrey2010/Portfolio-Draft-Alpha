const sections = document.querySelectorAll('.section');
const sectionButtons = document.querySelectorAll('.controls')
const sectionButton = document.querySelectorAll('.control')
const allSection = document.querySelectorAll('.main-content');

function pageTranistions(){
    //button click active class
    for(let i = 0; i < sectionButton.length; i++) {
        sectionButton[i].addEventListener('click', function () {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace(' active-btn', '');
            this.className += ' active-btn'
        } )
    }
}

pageTranistions()