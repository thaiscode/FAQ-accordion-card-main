let arrow = document.querySelectorAll('.summary__arrow')



for (let i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener('click', rotate)
}

function rotate(e){
    e.target.classList.toggle('active')   
}




/*for (let i = 0; i < arrow.length; i++) {
    document.body.addEventListener('click', function (e) {
        if (e.target == arrow[i]) {
            arrow[i].classList.toggle('active');
        } else {
            arrow[i].classList.remove('active')
        }
    })
    
}*/



