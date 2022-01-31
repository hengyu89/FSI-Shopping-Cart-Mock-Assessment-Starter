let totQuantity = document.querySelector('.total-quantity')
let amount = 1
/*totQuantity.innerHTML = 'Quantity: ' + newAmount*/
let btnMinus = document.getElementById('quantity-down')
btnMinus.addEventListener('click', function(){
    
    if(amount > 0){
        amount = amount - 1
        totQuantity.innerHTML = 'Quantity: ' + amount
    }
})

let btnPlus = document.getElementById('quantity-up')
btnPlus.addEventListener('click', function(){
    amount = amount + 1
    totQuantity.innerHTML = 'Quantity: ' + amount
})