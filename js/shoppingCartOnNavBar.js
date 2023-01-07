// load loadProducts.js before loading this
class cookie{ // https://www.w3schools.com/js/js_cookies.asp
	static setCookie(cname, cvalue, exdays) {
		const d = new Date();
		d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
		let expires = "expires="+d.toUTCString();
		document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	}
	static getCookie(cname) {
		let name = cname + "=";
		let ca = document.cookie.split(';');
		for(let i = 0; i < ca.length; i++) {
			let c = ca[i];
			while (c.charAt(0) == ' ') {
			c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
			}
		}
		return "";
	}
}
class shoppingCartOnNavBar{
	static #holder = document.getElementById("shoppingCartOnNavBarProducts"); 
	static #footerholder = document.getElementById("shoppingCartOnNavBarFooter"); 
	static #Cart = {};
	static displayToCart(product){
		if (!(product in [0,1,2])) throw "invaild product id";
		var amount = (this.#Cart[product] ? this.#Cart[product] : 0);
		this.#holder.innerHTML += `<tr id='navbarProduct-${product}'><td class='text-center'><i class='fa-solid fa-trash' onclick="shoppingCartOnNavBar.removeFromCart(${product})"></i></td><td class='align-middle'><img src='${products[product].image}' style='width:50px;'></td><td class='align-middle'>${products[product].name}</td><td class='align-middle'><span class="navbarProduct_amount">${amount}</span>杯</td><td class='align-middle text-right'>$<span class="navbarProduct_total">${amount * products[product].price}</span></td></tr>`;
		return;
	}
	static addToCart(product,amount){
		if (product in this.#Cart){
			this.#Cart[product] += amount;
			var p = document.getElementById(`navbarProduct-${product}`);
			p.getElementsByClassName("navbarProduct_amount")[0].innerText = this.#Cart[product].toString();
			p.getElementsByClassName("navbarProduct_total")[0].innerText = (this.#Cart[product] * products[product].price).toString();
		}else{
			this.#Cart[product] = amount;
			this.displayToCart(product);
		}
		this.updateTotal();
		this.#updateCookie();
		return;
	}
	static updateTotal(){

		var total = 60; //運費
		Object.keys(this.#Cart).forEach(e=>{
			total += products[e].price * this.#Cart[e];
		});
		this.#footerholder.innerHTML = `<tr><td colspan="4">運費</td><td class="text-right"><strong>$60</strong></td></tr><tr><td colspan="4">合計</td><td class="text-right"><strong>$${total}</strong></td></tr>`;
		return;
	}
	static #updateCookie(){
		for (var i=0; i<3; i++){
			if (i in Object.keys(this.#Cart)){
				cookie.setCookie(`p${i}`,this.#Cart[i],1);
			}else{
				cookie.setCookie(`p${i}`,0,1);
			};
		
		};
		console.log(document.cookie)
		return;
	}
	static loadFromCookie(){
		for (var i=0; i<3; i++){
			var value = parseInt(cookie.getCookie(`p${i}`)) 
			if (Number.isInteger(value) && value <= 1000 && value > 0){
				this.#Cart[i] = value;
			}
			else{
				this.#Cart[i] = 0;
			}

		};
		return;
	}
	static displayAll(){
		Object.keys(this.#Cart).forEach((e)=>{this.displayToCart(e)})
		this.updateTotal();
	}
	static removeFromCart(product){
		document.getElementById(`navbarProduct-${product}`).remove();
		delete this.#Cart[product];
		this.updateTotal();
		this.#updateCookie();
	}
	//static loadFromURL(){
	//	var box = (new URL(location.href)).searchParams;
	//	for (var i=0;i<3;i++);
	//}
	//static readCart(){
	//	return this.#Cart;
	//
}
shoppingCartOnNavBar.loadFromCookie();