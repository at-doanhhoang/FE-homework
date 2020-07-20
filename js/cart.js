var cartList = JSON.parse(localStorage.getItem('cart'));
var cartItems = document.getElementsByClassName('cart-items')[0];
var html = '';
//Start input value in table product
Object.keys(cartList).map(function (productId) {
    html += '<div class="cart-row" id="' + productId + '">'
         +       '<div class="cart-item cart-column" >'
         +           '<img class="cart-item-img" src="../images/img_1.jpg" alt="" width="100px" height="100px">'
         +           '<span class="cart-item-title">' + cartList[productId].name + '</span>'
         +       '</div>'
         +           '<span class="cart-price cart-column">' + cartList[productId].price + '</span>'
         +       '<div class="cart-qty cart-column">'
         +           '<button class="btn btn-danger '+ productId + '" type="button">REMOVE</button>'
         +       '</div>'
         +   '</div >';
});
cartItems.innerHTML = html;
//End
//Start setting button remove
var removeProduct = document.getElementsByClassName('btn-danger');
for (var i = 0; i < removeProduct.length; i++) {
    removeProduct[i].addEventListener('click', function () {
        var productId = this.getAttribute('class').split(' ')[2];
        document.getElementById(productId).remove(); //Remove tr of Product
        delete cartList[productId]; //Remove product and set new cart in LocalStorage
        localStorage.setItem("cart", JSON.stringify(cartList));
    })
}