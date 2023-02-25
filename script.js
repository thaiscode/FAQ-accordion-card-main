let arrow = document.querySelectorAll('.summary__arrow')
let summary = document.querySelectorAll('.detail')

summaryArr = Array.from(summary)
arrowArr = Array.from(arrow)

for (let i = 0; i < summaryArr.length; i++) {
    summaryArr[i].addEventListener('click', rotate)
}

function rotate(e){
    e.target.classList.toggle('active')
}



