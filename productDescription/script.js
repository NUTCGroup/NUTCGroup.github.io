id = Number(new URL(window.location.href).searchParams.get("product"));
if (Number.isInteger(id)){
	id = id%products.length;
	product = products[id];
}else product = products[0];
[["title", "innerHTML", "name"],["content", "innerHTML", "description"],["price_", "innerHTML", "price"], ["item", "src", "image"]].forEach((e)=>{
	document.getElementById(e[0])[e[1]] = product[e[2]].toString();
})