const searchInput = document.querySelector("#search-input");

const addLinkContainer = document.querySelector(".add-link-container");

const passwordContainer = document.querySelector(".password-input-container");

const cartContainer = document.querySelector(".cart-container");

const linkAddBtn = document.querySelector("#link-add-btn");

const submitBtn = document.querySelector("#submit-btn");

const passSubBtn = document.querySelector("#pass-sub-btn");

const cartList = [];

submitBtn.addEventListener("click", (event) => {
	event.preventDefault();
	let formdata = new FormData(addLinkContainer);
	let title = formdata.get("title");
	let link = formdata.get("link");
	let image = formdata.get("image");

	let imageLink = URL.createObjectURL(image);
	let ranId = Math.floor(Math.random() * 1000);

	const cart = {
		id: "",
		title: "",
		link: "",
		image: "",
	};

	cart.id = ranId;
	cart.title = title;
	cart.link = link;
	cart.image = imageLink;

	cartList.push(cart);

	renderCart(cartList);
});

linkAddBtn.addEventListener("dblclick", () => {
	passwordContainer.style.display = "block";

	passSubBtn.addEventListener("click", (event) => {
		event.preventDefault();
		let formdata = new FormData(passwordContainer);

		const password = formdata.get("password");

		if (password == "SOURABH70") {
			addLinkContainer.style.display = "flex";
		} else {
			addLinkContainer.style.display = "none";
		}
	});
});

searchInput.addEventListener("keyup", (event) => {
	const inputValue = event.target.value.toLowerCase();
	const filteredCart = cartList.filter((cart) => {
		return cart.title.toLowerCase().includes(inputValue);
	});

	renderCart(filteredCart);
});

const renderCart = (cartList) => {
	cartContainer.innerHTML = "";
	for (let cart of cartList) {
		cartContainer.innerHTML += `<div id="${cart.id}" class="cart">
                        <div class="avatar-container">
                            <img src="${cart.image}" alt="">
                        </div>
                        <div class="cart-content">
                            <h4>Post - ${cart.title} ( Video Link )</h4>
                            <a href="${cart.link}">Click Here to Get Link</a>
                        </div>
                    </div>`;
	}
};

renderCart(cartList);
