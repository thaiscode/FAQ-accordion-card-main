let summary = document.querySelectorAll('detail')
let arrow = document.querySelectorAll('.summary__arrow')


summaryArr = Array.from(summary)
arrowArr = Array.from(arrow)

for (let i = 0; i < summaryArr.length; i++) {
    summaryArr[i].addEventListener('click', rotate)
}

function rotate(e){
    e.target.classList.toggle('active')
}



