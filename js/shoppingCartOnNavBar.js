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
	static displayToCart(product,ex = true){
		if (!(product in [0,1,2])) throw "invaild product id";
		if((this.#Cart[product] <= 0) && ex){
			return
		}
		var amount = (this.#Cart[product] ? this.#Cart[product] : 0);
		//this.#holder.innerHTML += `<tr id='navbarProduct-${product}'><td class='text-center'><i class='fa-solid fa-trash' onclick="shoppingCartOnNavBar.removeFromCart(${product})"></i></td><td class='align-middle'><img src='${products[product].image}' style='width:50px;'></td><td class='align-middle'>${products[product].name}</td><td class='align-middle'><span class="navbarProduct_amount">${amount}</span>杯</td><td class='align-middle text-right'>$<span class="navbarProduct_total">${amount * products[product].price}</span></td></tr>`;
		this.#holder.innerHTML += `<tr id='navbarProduct-${product}'><td class='text-center'><i class='fa-solid fa-trash' onclick="shoppingCartOnNavBar.removeFromCart(${product})"></i></td><td class='align-middle'><img src='${products[product].image}' style='width:50px;'></td><td class='align-middle'>${products[product].name}</td><td class='align-middle'><input class="navbarProduct_amount" type="number" max="1000" min="1" value="${amount}" oninput="shoppingCartOnNavBar.onAmountInput(this,${product})">杯</td><td class='align-middle text-right'>$<span class="navbarProduct_total">${amount * products[product].price}</span></td></tr>`;
		return;
	}
	static addToCart(product,amount){
		return this.setProductAmountInCart(product,this.#Cart[product]+amount);
	}
	static setProductAmountInCart(product,amount){
		var p = document.getElementById(`navbarProduct-${product}`);
		this.#Cart[product] = amount;
		if (p){
			p.getElementsByClassName("navbarProduct_amount")[0].innerText = amount.toString();
			p.getElementsByClassName("navbarProduct_total")[0].innerText = (amount * products[product].price).toString();
		}else{
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
		this.updateTotalAmount();
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
	static displayAll(ex = true){
		Object.keys(this.#Cart).forEach((e)=>{this.displayToCart(e,ex)})
		this.updateTotal();
	}
	static removeFromCart(product){
		document.getElementById(`navbarProduct-${product}`).remove();
		this.#Cart[product] = 0;
		this.updateTotal();
		this.#updateCookie();
	}
	static updateTotalAmount(){
		var total = 0;
		Object.keys(this.#Cart).forEach(e=>{total+=this.#Cart[e];});
		var e = document.getElementById("shoppingCartOnNavBarTotalAmount");
		try{
			e.innerText = total.toString();
			e.style.display = ((total===0) ? "none" : "inline");
		}catch{
			return;
		}
	}
	//static loadFromURL(){
	//	var box = (new URL(location.href)).searchParams;
	//	for (var i=0;i<3;i++);
	//}
	//static readCart(){
	//	return this.#Cart;
	//
	static onAmountInput(self,product){
		var amount = Number(self.value);
		if(!Number.isFinite(amount)){
			amount = 1000;
		}else if(!Number.isInteger(amount)){ 
			amount = parseInt(amount);
		}
		amount = Math.max(Math.min(1000,self.value),1);
		self.value = amount.toString();
		return this.setProductAmountInCart(product,amount);
	}
}
shoppingCartOnNavBar.loadFromCookie();