let products = 
[
    { id: 1, name: 'Canecas Brancas ', price: 35.00, image: 'img/product1.jpg' },
    { id: 2, name: 'Camisetas Brancas ', price: 40.00, image: 'img/product2.png' },
    { id: 3, name: 'Toalhas ', price: 25.00, image: 'img/product3.jpg' },
    { id: 4, name: 'Azulejos ', price: 20.00, image: 'img/product4.jpg' },
    { id: 5, name: 'Canecas Pretas ', price: 40.00, image: 'img/product5.jpg' },
    { id: 6, name: 'Canecas Magicas ', price: 45.00, image: 'img/product6.jpg' },
    { id: 7, name: 'Garrafas ', price: 50.00, image: 'img/product7.jpg' },
    { id: 8, name: 'Cadernos ', price: 40.00, image: 'img/product8.jpg' },
    { id: 9, name: 'Camisetas Poliéster ', price: 45.00, image: 'img/product9.jpg' },
];

let cart = [];

function renderProducts()
{
    let productGrid = document.querySelector('.product-grid');
    productGrid.innerHTML = '';
    products.forEach((product) =>
    {
        let productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>R$:${product.price}</p>
            <button id="btnCart">Adicionar ao Carrinho</button>
        `;
        productDiv.querySelector('button').addEventListener('click', () => addToCart(product.id));
        productGrid.appendChild(productDiv);
    });
}

function addToCart(productId)
{
    let product = products.find((product) => product.id === productId);
    cart.push(product);
    renderCart();
}

function renderCart()
{
    let cartTable = document.querySelector('.cart table tbody');
    cartTable.innerHTML = '';
    cart.forEach((product) =>
    {
        let cartRow = document.createElement('tr');
        cartRow.innerHTML = `
        <td>${product.name}</td>
        <td>1</td>
        <td>${handlePrice(product.price)}</td>
        <td>${handlePrice(product.price)}</td>
        `;
        cartTable.appendChild(cartRow);
    });
    updateTotal();
}

function updateTotal()
{
    let total = cart.reduce((acc, product) => acc + product.price, 0);
    document.getElementById('total').textContent = `R$:${total.toFixed(2)}`;
}

const slider = document.querySelectorAll('.slider-img');
let currentSlider = 0;
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');

function hideSlider()
{
    slider.forEach(item => item.classList.remove('on'));
}

function showSlider()
{
    slider[currentSlider].classList.add('on')
}

function nextSlider()
{
    hideSlider()
    if(currentSlider === slider.length -1)
    {
        currentSlider = 0
    } else 
    {
        currentSlider++
    }
    showSlider()
}

function prevSlider() 
{
    hideSlider()
    if(currentSlider === 0)
    {
        currentSlider = slider.length -1
    } else
    {
        currentSlider--
    }
    showSlider()
}

next.addEventListener('click', nextSlider)
prev.addEventListener('click', prevSlider)

document.getElementById('checkout').addEventListener('click', () =>
{
    if (cart.length === 0)
    {
        alert('Seu carrinho está vazio');
    }
    else
    {
        alert('Pedido realizado com succeso');
        cart = [];
        renderCart();
    }
});

renderProducts()

