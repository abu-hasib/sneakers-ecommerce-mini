const product = document.querySelector('#product > img');
const nthchild1 = document.querySelector('.thumbnails > *:nth-child(1)');
const nthchild2 = document.querySelector('.thumbnails > *:nth-child(2)');
const nthchild3 = document.querySelector('.thumbnails > *:nth-child(3)');
const nthchild4 = document.querySelector('.thumbnails > *:nth-child(4)');
const add = document.querySelector('.cta');
const cartContent = document.querySelector('.cart > p');
const cart2 = document.querySelector('.cart');
const productName = document.querySelector('.flow > h1');
const cart = document.querySelector('.cart-icon');
const nav = document.querySelector('.primary-navigation');
const cover = document.querySelector('.cover');
const open = document.querySelector('.nav-toggle');
const increase = document.querySelector('#increase');
const decrease = document.querySelector('#decrease');
const count = document.querySelector('#count');
const test = document.querySelector('.cart-icon');
// let quantity = 0;
let amount = 0;
let price = 125.0;

console.log('##: ', test.getAttribute('data-quantity'));

increase.addEventListener('click', () => {
	let quantity = count.innerHTML;
	quantity = Number(quantity) + 1;
	console.log(quantity);
	count.innerHTML = quantity;
	// test.setAttribute('data-quantity', quantity);
	console.log(quantity);
	// handleClick(quantity);
});

decrease.addEventListener('click', () => {
	let quantity = count.innerHTML;

	if (quantity > 1) {
		quantity = Number(quantity) - 1;
		count.innerHTML = quantity;
	}
});

nthchild1.addEventListener('click', (e) => {
	document.querySelector('.selected').classList.remove('selected');
	product.src = '../images/image-product-1.jpg';
	e.target.classList.add('selected');
});
nthchild2.addEventListener('click', (e) => {
	document.querySelector('.selected').classList.remove('selected');
	product.src = '../images/image-product-2.jpg';
	e.target.classList.add('selected');
});
nthchild3.addEventListener('click', (e) => {
	document.querySelector('.selected').classList.remove('selected');
	product.src = '../images/image-product-3.jpg';
	e.target.classList.add('selected');
});
nthchild4.addEventListener('click', (e) => {
	document.querySelector('.selected').classList.remove('selected');
	product.src = '../images/image-product-4.jpg';
	e.target.classList.add('selected');
});

add.addEventListener('click', (e) => {
	e.preventDefault();
	let quantity = count.innerHTML;
	test.setAttribute('data-quantity', quantity);
	handleClick(quantity);
});

cart.addEventListener('click', (e) => {
	let isShow = cart2.getAttribute('data-show');
	if (isShow === 'false') {
		cart2.setAttribute('data-show', true);
	} else {
		cart2.setAttribute('data-show', false);
	}
	console.log('cart', cart2.getAttribute('data-show'));
});

open.addEventListener('click', () => {
	let isOpen = nav.getAttribute('data-open');
	if (isOpen === 'false') {
		nav.setAttribute('data-open', true);
		cover.setAttribute('data-cover', true);
		open.setAttribute('aria-expanded', true);
	} else {
		nav.setAttribute('data-open', false);
		cover.setAttribute('data-cover', false);
		open.setAttribute('aria-expanded', false);
	}
});

function handleClick(quantity) {
	const item = document.createElement('div');
	item.classList.add('grid', 'item');
	const itemContent = `
    <div class="flex summary" style="width: 100%;">
      <img
        src="images/image-product-1-thumbnail.jpg"
        alt="product one thumbnail"
        data-src="images/image-product-1.jpg"
        style="border-radius: 0.5em; width: 48px; height: 48px;"
      />
      <div>
        <p class="text-gray fs-200">
          Fall Limited Edition Sneakers
        </p>
        <p class="text-dark-gray-blue fs-200" style="text-align: left;">$${price} x ${quantity} <span class="text-dark fs-300" style="font-weight: bold">$${
		price * quantity
	}.00</span></p>
      </div>
      <img onclick="handleRemove()" src="../images/icon-delete.svg" alt="cart icon" style="width: 1em; height: 1em;" class="pointer"/>
    </div>
    <div class="flex cta bg-accent pointer" style="width: 100%;">
      <a href="" class="text-light" style="font-weight: bold; width: 100%;">Checkout</a>
    </div>
`;
	item.innerHTML = itemContent;
	cartContent.innerHTML = '';
	quantity === 0 ? (cartContent.innerHTML = 'Your cart is empty.') : cartContent.appendChild(item);
}

function handleRemove() {
	handleClick(0);
}
