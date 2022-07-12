let contConselho = document.getElementById('contConselho') 
let spanConselho = document.getElementById('spanConselho') 
let buttonGerar = document.getElementById('buttonGerar') 

document.addEventListener('DOMContentLoaded', () => {
    spanConselho.span.innerHTML = main()
})

function main(){
    data = getConselho('https://api.adviceslip.com/advice')
    let conselho = JSON.parse(data)
    return conselho.slip.advice
}

function getConselho(url){
    let request = new XMLHttpRequest()
    request.open('GET', url, false)
    request.send()

    return request.responseText
}

function criarConselho(){
    spanConselho.innerHTML = main()
    contConselho.style.display = 'block'
}

buttonGerar.addEventListener('click', criarConselho)