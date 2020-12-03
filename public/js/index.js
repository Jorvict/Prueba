var removeBasketItemButtons = document.getElementsByClassName('btn-delete')
console.log(removeBasketItemButtons)
for (var i = 0; i < removeBasketItemButtons.length; i++){
    var button = removeBasketItemButtons[i]
    button.addEventListener('click', function(event) {
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.parentElement.parentElement.remove()
    })
}
