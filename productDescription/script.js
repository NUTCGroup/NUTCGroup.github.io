products = [
	{
		"name": "名字",
		"description": "簡介",
		"price": 0,
		"image": ""
	},
	{
		"name": "名字",
		"description": "簡介",
		"price": 0,
		"image": ""
	},
	{
		"name": "名字",
		"description": "簡介",
		"price": 0,
		"image": ""
	}
];
id = Number(new URL(window.location.href).searchParams.get("product"));
if (Number.isInteger(id)){
	id = id%products.length;
	product = products[id];
}else{
	product = products[0];
}
[["title", "name"],["content", "description"],["price_", "price"]].forEach((e)=>{
	document.getElementById(e[0]).innerText = product[e[1]].toString();
})
document.getElementById("item").src=product["image"];