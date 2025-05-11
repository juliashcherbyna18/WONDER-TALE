let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

let year = document.querySelector('.pricing .price-toggler .year');
let month = document.querySelector('.pricing .price-toggler .month');
let yearAmount = document.querySelectorAll('.pricing .price .year');
let monthAmount = document.querySelectorAll('.pricing .price .month');

year.onclick = () =>{
    year.classList.add('active');
    month.classList.remove('active');
    yearAmount.forEach(years => {
        years.style.display = 'block';
    });
    monthAmount.forEach(months => {
        months.style.display = 'none';
    });
};

month.onclick = () =>{
    year.classList.remove('active');
    month.classList.add('active');
    yearAmount.forEach(years => {
        years.style.display = 'none';
    });
    monthAmount.forEach(months => {
        months.style.display = 'block';
    });
};

let slides = document.querySelectorAll('.reviews .slide-container .slide');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

document.querySelectorAll('.faq .accordion .accordion-heading').forEach(heading => {
    heading.onclick = () => {
        heading.parentElement.classList.toggle('active');
    }
});

let cart_list = document.querySelector('.cart-items-list')
let cart_total = document.querySelector('.cart-total')
let orderBtn = document.querySelector("#orderBtn")
let orderSection = document.querySelector(".order")


function get_item(item) {
    return `<div class = "cart-item">
                <h4 class="cart-item-title">${item.title}</h4>
                <div class="cart-item-quantity">Кількість: ${item.quantity}</div>
                <div class="cart-item-price" data-price="${item.price}">${item.price * item.quantity} грн</div>
            </div>`
}

function showCartList() {
    cart_list.innerHTML = ''
    for (let key in cart.items) { // проходимося по всіх ключах об'єкта cart.items
        cart_list.innerHTML += get_item(cart.items[key])
    }
    cart_total.innerHTML = cart.calculateTotal()
}

showCartList()

orderBtn.addEventListener("click", function (event) {
    orderBtn.style.display = "none"
    orderSection.style.display = "block"
    anime({
        targets: '.order',
        opacity: 1, // Кінцева прозорість (1 - повністю видимий)
        duration: 1000, // Тривалість анімації в мілісекундах
        easing: 'easeInOutQuad'
    })

    