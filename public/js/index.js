if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready()
}

function ready() {
    var removeBasketItemButtons = document.getElementsByClassName('btn-delete')
    // console.log(removeBasketItemButtons)
    for (var i = 0; i < removeBasketItemButtons.length; i++){
        var button = removeBasketItemButtons[i]
        button.addEventListener('click', removeBasketItem)
    }
    
}

function removeBasketItem(event){
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.parentElement.parentElement.remove()
    updateBasketTotal()
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
        // console.log(arrayprice[i])
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
        if (isNaN(quantity) || quantity <=0){
            quantity = 0
        }
        console.log(quantity)
        arrayquantity.push(quantity)
    }

    // Se declara variable para total
    var total = 0

    // Se multiplica la cantidad con su costo respectivo
    for (var i = 0; i < arrayprice.length; i++){
        total = total + (arrayprice[i] * arrayquantity[i])
    }

    total = Math.round(total*100) / 100
    document.getElementsByClassName('total')[0].innerText = "S/ "+ total
}


// Producto 1
let btnAdd1 = document.querySelector(".btn1-i");
let btnSubtract1 = document.querySelector(".btn1-d");
let input1 = document.querySelector(".inp-1");

btnAdd1.addEventListener('click', function(event){
    input1.value = parseInt(input1.value) + 1;
    updateBasketTotal()
})
btnSubtract1.addEventListener('click', function(event){
    input1.value = parseInt(input1.value) - 1;
    updateBasketTotal()
})

// Producto 2
let btnAdd2 = document.querySelector(".btn2-i");
let btnSubtract2 = document.querySelector(".btn2-d");
let input2 = document.querySelector(".inp-2");

btnAdd2.addEventListener('click', function(event){
    input2.value = parseInt(input2.value) + 1;
    updateBasketTotal()
})
btnSubtract2.addEventListener('click', function(event){
    input2.value = parseInt(input2.value) - 1;
    updateBasketTotal()
})

// Producto 3
let btnAdd3 = document.querySelector(".btn3-i");
let btnSubtract3 = document.querySelector(".btn3-d");
let input3 = document.querySelector(".inp-3");

btnAdd3.addEventListener('click', function(event){
    input3.value = parseInt(input3.value) + 1;
    updateBasketTotal()
})
btnSubtract3.addEventListener('click', function(event){
    input3.value = parseInt(input3.value) - 1;
    updateBasketTotal()
})

// Producto 4
let btnAdd4 = document.querySelector(".btn4-i");
let btnSubtract4 = document.querySelector(".btn4-d");
let input4 = document.querySelector(".inp-4");

btnAdd4.addEventListener('click', function(event){
    input4.value = parseInt(input4.value) + 1;
    updateBasketTotal()
})
btnSubtract4.addEventListener('click', function(event){
    input4.value = parseInt(input4.value) - 1;
    updateBasketTotal()
})

// Producto 5
let btnAdd5 = document.querySelector(".btn5-i");
let btnSubtract5 = document.querySelector(".btn5-d");
let input5 = document.querySelector(".inp-5");

btnAdd5.addEventListener('click', function(event){
    input5.value = parseInt(input5.value) + 1;
    updateBasketTotal()
})
btnSubtract5.addEventListener('click', function(event){
    input5.value = parseInt(input5.value) - 1;
    updateBasketTotal()
})