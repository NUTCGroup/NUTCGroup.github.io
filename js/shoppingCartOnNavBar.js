// load loadProducts.js before loading this

class shoppingCartOnNavBar{
	static #holder = document.getElementById("shoppingCartOnNavBarProducts"); 
	static #footerholder = document.getElementById("shoppingCartOnNavBarFooter"); 
	static displayToCart(product){
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

		this.#holder.innerHTML += `<tr><td class='text-center'><i class='fa-solid fa-trash'></i></td><td class='align-middle'><img src='${products[product].image}' style='width:50px;'></td><td class='align-middle'>${products[product].name}</td><td class='align-middle'>1杯</td><td class='align-middle text-right'>$40</td></tr>`;
		return;
	}
	static updateTotal(){
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
		var total;

		this.#footerholder.innerHTML = `<tr><td colspan="4">運費</td><td class="text-right"><strong>$60</strong></td></tr><tr><td colspan="4">合計</td><td class="text-right"><strong>$${total}</strong></td></tr>`;
	}
}
