// nie mozna kliknac wybierz napiwek, w sensie musimy dac minimum 5% napiwku

const error = document.querySelector('.error')
const countBtn = document.querySelector('.count')
const costInfo = document.querySelector('.cost-info')
const cost = document.querySelector('.cost')

const price = document.querySelector('#price')
const people = document.querySelector('#people')
const tip = document.querySelector('#tip')

const showBill = () => {

    if(price.value > 0 && people.value >= 1 && tip.value > 0 ) {
        error.textContent= ''
        countBill()
    } else {
        costInfo.style= 'none'
        error.textContent= 'Podaj prawidłowe wartości'
    }
}

const countBill = () => {

    const newPrice = parseFloat(price.value)
    const newPeople = parseFloat(people.value)
    const newTip = parseFloat(tip.value)

    const sum = (newPrice + (newPrice * newTip)) / newPeople
    costInfo.style.display= 'block'
    cost.textContent= sum.toFixed(2)+' '
}

countBtn.addEventListener('click', showBill)





