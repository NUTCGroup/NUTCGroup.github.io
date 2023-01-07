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
	static #displayToCart(product){
		//	<tr>
		//	<td class="text-center">
		//		<i class="fa-solid fa-trash"></i>
		//	</td>
		//	<td class="align-middle">
		//		<img src="image/originalCotta.jpeg" style="width:50px;">
		//	</td>
		//	<td class="align-middle">原味鮮奶酪</td>
		//	<td class="align-middle">1杯</td>
		//	<td class="align-middle text-right">$40</td>
		//  </tr>


		//	<tr>
		//	<td class="text-center">
		//		<i class="fa-solid fa-trash"></i>
		//	</td>
		//	<td class="align-middle">
		//		<img src="image/originalCotta.jpeg" style="width:50px;">
		//	</td>
		//	<td class="align-middle">原味鮮奶酪</td>
		//	<td class="align-middle">${amount}杯</td>
		//	<td class="align-middle text-right">${price*amount}</td>
		//  </tr>
		if (!(product in [0,1,2])) return console.error("invaild product id");

		this.#holder.innerHTML += `<tr id='navbarProduct-${product}'><td class='text-center'><i class='fa-solid fa-trash'></i></td><td class='align-middle'><img src='${products[product].image}' style='width:50px;'></td><td class='align-middle'>${products[product].name}</td><td class='align-middle'><span class="navbarProduct_amount">${this.#Cart[product]}</span>杯</td><td class='align-middle text-right'>$<span class="navbarProduct_total">${this.#Cart[product] * products[product].price}</span></td></tr>`;
		return;
	}
	static addToCart(product,amount){
		if (product in this.#Cart){
			this.#Cart[product] += amount;
			// update amount in nav bar
			var p = document.getElementById(`navbarProduct-${product}`)
			
						//
			p.getElementsByClassName("navbarProduct_amount")[0].innerText = this.#Cart[product].toString();
			p.getElementsByClassName("navbarProduct_total")[0].innerText = (this.#Cart[product] * products[product].price).toString();
		}else{
			this.#Cart[product] = amount;
			this.#displayToCart(product);
		}
		this.#updateTotal();
		return;
	}
	static #updateTotal(){
		//	<tr>
		//	<td colspan="4">運費</td>
		//	<td class="text-right">
		//		<strong>$60</strong>
		//	</td>
		//</tr>
		//<tr>
		//	<td colspan="4">合計</td>
		//	<td class="text-right">
		//		<strong>$100</strong> 
		//	</td>
		//</tr>
		var total = 60; //運費
		Object.keys(this.#Cart).forEach(e=>{
			console.error(this.#Cart[e]);
			console.log(products[e].price)
			total += products[e].price * this.#Cart[e];
		});
		this.#footerholder.innerHTML = `<tr><td colspan="4">運費</td><td class="text-right"><strong>$60</strong></td></tr><tr><td colspan="4">合計</td><td class="text-right"><strong>$${total}</strong></td></tr>`;
		this.#updateCookie();
	}
	static #updateCookie(){
		for (var i=0; i<2; i++) cookie.setCookie(i,(this.#Cart[i] ? this.#Cart[i] : ""),1);
		return;
	}
	static loadFromCookie(){
		for (var i=0; i<2; i++){
			var value = parseInt(cookie.getCookie(i)) 
			if (Number.isInteger(value) && value <= 1000 && value > 0){
				this.#Cart[i] = value;
			}
		};
		for (e in this.#Cart) this.#displayToCart(e);
		return;
	}
}
shoppingCartOnNavBar.loadFromCookie();