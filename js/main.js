const spanYear = document.getElementById('copyear')
let date = new Date()
let year = date.getFullYear()
spanYear.innerHTML = year
let titulo = document.getElementById('titulo')
titulo.innerHTML = 'Altaria'


let item1 = document.getElementById('item1')
let item2 = document.getElementById('item2')
let item3 = document.getElementById('item3')
let divisor = document.getElementById('line-divisor')
let slideprecios = document.getElementById('slider-precios')

const butCheks = document.getElementsByClassName('slide-posible')

let anterior = item1.getBoundingClientRect().x
slideprecios.addEventListener('scroll', () => {
    let item1Pos = item1.getBoundingClientRect().x
    let item2Pos = item2.getBoundingClientRect().x
    let item3Pos = item3.getBoundingClientRect().x
    let divisorPos = divisor.getBoundingClientRect().x

    function dif(item) {
        return Math.abs(item) - divisorPos
    }

    if (dif(item1Pos) < dif(item2Pos) && dif(item1Pos) < dif(item3Pos)) {
        for(i = 0; i < butCheks.length; i++){
            butCheks[i].classList.remove('cel-slide-check')
        }
        butCheks[0].classList.add('cel-slide-check')
    }else if(dif(item2Pos) < dif(item1Pos) && dif(item2Pos) < dif(item3Pos)){
        for(i = 0; i < butCheks.length; i++){
            butCheks[i].classList.remove('cel-slide-check')
        }
        butCheks[1].classList.add('cel-slide-check')
    }else if(dif(item3Pos) < dif(item2Pos) && dif(item3Pos) < dif(item1Pos)){
        for(i = 0; i < butCheks.length; i++){
            butCheks[i].classList.remove('cel-slide-check')
        }
        butCheks[2].classList.add('cel-slide-check')
    }
})

