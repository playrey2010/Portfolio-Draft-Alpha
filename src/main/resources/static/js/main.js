const sections = document.querySelectorAll('.section');
const sectionButtons = document.querySelectorAll('.controls')
const sectionButton = document.querySelectorAll('.control')
const allSection = document.querySelectorAll('.main-content');

function pageTransitions(){
    //button click active class
    for(let i = 0; i < sectionButton.length; i++) {
        sectionButton[i].addEventListener('click', function () {
            // find the button that currently has 'active-btn' class.
            let currentBtn = document.querySelectorAll('.active-btn'); // querySelector creates array
            // and there is only one possible result (the current button), so it defaults to index 0.
            currentBtn[0].className = currentBtn[0].className.replace(' active-btn', '');
            this.className += ' active-btn';
        } )
    }

    // sections active class
    allSection[0].addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if (id) {
            // remove 'selected' from the other buttons
            sectionButtons.forEach((btn) =>{
                btn.classList.remove('active');
            })
            e.target.classList.add('active');

            // hide other sections
            sections.forEach((section)=> {
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }

    } )
}

pageTransitions()