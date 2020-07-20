var productList = document.getElementsByClassName('product-list')[0];
var products = [
    {
        id: 1,
        name: 'Product 1',
        price: '$40.00',
    },
    {
        id: 2,
        name: 'Product 2',
        price: '$40.00',

    },
    {
        id: 3,
        name: 'Product 3',
        price: '$40.00',
    },
    {
        id: 4,
        name: 'Product 4',
        price: '$40.00',
    },
    {
        id: 5,
        name: 'Product 5',
        price: '$40.00',
    },
    {
        id: 6,
        name: 'Product 6',
        price: '$40.00',
    },
    {
        id: 7,
        name: 'Product 7',
        price: '$40.00',
    },
    {
        id: 8,
        name: 'Product 8',
        price: '$40.00',
    },
    {
        id: 9,
        name: 'Product 9',
        price: '$40.00',
    }
];
var html = '';
for (var i = 0; i < products.length; i++) {
    html += '<li class="product-item">'
        + '<a href="">'
        + '<img src="../images/img_1.jpg" alt="">'
        + '<h4 id="name' + products[i].id + '">' + products[i].name + '</h4>'
        + '</a>'
        + '<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>'
        + '<button class="add-cart" id="' + products[i].id + '">ADD TO CART</button>'
        + '<p class="price" id="price' + products[i].id + '">' + products[i].price + '</p>'
        + '</li>';
}
productList.innerHTML = html;

var carts = document.querySelectorAll('.add-cart');
for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click',  function (e) {
        cartNumbers(products[i]);
    })
}

function onLoadCartNumbers() {
    var productNumbers = localStorage.getItem('cartNumbers');

    if (productNumbers) {
        document.querySelector('.sup').textContent = productNumbers;
    }
}

function cartNumbers(product) {
    console.log(product)
    var productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.sup').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.sup').textContent = 1;
    }

}

onLoadCartNumbers();

if (localStorage.getItem("cart")) {
    var cartList = JSON.parse(localStorage.getItem('cart'));
} else {
    var cartList = {};
}
for (var i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', function () {
        alert('You have added a product to your shopping cart');
        var productId = this.getAttribute('id');
        var nameProduct = document.getElementById('name' + productId).innerHTML;
        var priceProduct = document.getElementById('price' + productId).innerHTML;
        var product = {
            name: nameProduct,
            price: priceProduct
        }
        cartList[productId] = product;
        localStorage.setItem("cart", JSON.stringify(cartList));
    })
}




