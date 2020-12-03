let btnAdd = document.querySelector(".increase");
let btnSubtract = document.querySelector(".decrease");
let input = document.querySelector(".quantity-value");

btnAdd.addEventListener('click', function(event){
    input.value = parseInt(input.value) + 1;
})
btnSubtract.addEventListener('click', function(event){
    input.value = parseInt(input.value) - 1;
})


var removeBasketItemButtons = document.getElementsByClassName('btn-delete')
console.log(removeBasketItemButtons)
for (var i = 0; i < removeBasketItemButtons.length; i++){
    var button = removeBasketItemButtons[i]
    button.addEventListener('click', function(event) {
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.parentElement.parentElement.remove()
        updateBasketTotal()
    })
}

function updateBasketTotal(){

    //Precios
    var productprices = document.getElementsByClassName('product-price')

    // Se declara array para precios
    var arrayprice = []

    // Se obtiene los valores de precios
    for (var i = 0; i < productprices.length; i++){
        var productprice = productprices[i]
        var priceValue = productprice.getElementsByTagName('span') [0]
        var price = parseFloat(priceValue.innerText.replace('S/', ''))
        arrayprice.push(price)
    }

    // Se almacena los valores de precios en un array
    for (i in arrayprice){
        console.log(arrayprice[i])
    }


    // Cantidad
    var productquantitys = document.getElementsByClassName('product-quantity')

    // Se declara array para cantidad
    var arrayquantity = []

    // Se obtiene los valores de las cantidades
    for (var i = 0; i < productquantitys.length; i++){
        var productquantity = productquantitys[i]
        var quantityvalue = productquantity.getElementsByClassName('quantity-value') [0]
        var quantity = quantityvalue.value
        arrayquantity.push(quantity)
    }

    // Se declara variable para total
    var total = 0

    // Se multiplica la cantidad con su costo respectivo
    for (var i = 0; i < arrayprice.length; i++){
        total = total + (arrayprice[i] * arrayquantity[i])
    }

    document.getElementsByClassName('total')[0].innerText = "S/ "+ total
}
