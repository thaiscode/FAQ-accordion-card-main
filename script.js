let arrow = document.querySelector('.summary__arrow')
    arrow.addEventListener('click', rotate)



function rotate() {
    arrow.classList.toggle('is-animating')
}
