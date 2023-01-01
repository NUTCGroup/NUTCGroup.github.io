products = [
	{
		"name": "原味鮮奶酪",
		"description": "鮮奶酪，在一定的溫度下，精選之牛乳在發酵中動舞，能展現祂十足的魅力。<br>使用最鮮醇的牛乳，將帶給你無盡的美味，夾雜的不是多餘的滋味，是那牛乳的鮮與甜，對喜歡純樸的滿滿的饗宴。",
		"price": 40,
		"image": "../image/originalCotta.jpeg"
	},
	{
		"name": "杏仁鮮奶酪",
		"description": "杏仁帶著獨特杏香，與鮮奶共舞著，譜出使人陶醉的樂章。<br>特選杏仁，沒有那多餘的苦澀，完整杏香使原本足夠鮮甜的奶酪，變得更加香甜美味，對喜歡杏香的你，豈不是不可不選的嗎？",
		"price": 45,
		"image": "../image/almondCotta.jpg"
	},
	{
		"name": "芋頭鮮奶酪",
		"description": "鮮甜的芋頭，是帶動味蕾的使者，鼓舞著，勝過傳統。<br>嚴格挑選，才能發掘芋頭最純真的香，與奶酪的結合，讓味覺更進一步的體驗，奶酪與芋頭的交響樂，對芋頭情有獨鍾的你，就不要猶豫了。",
		"price": 45,
		"image": "../image/taroCotta.jpg"
	}
];
id = Number(new URL(window.location.href).searchParams.get("product"));
if (Number.isInteger(id)){
	id = id%products.length;
	product = products[id];
}else{
	product = products[0];
}
[["title", "innerHTML", "name"],["content", "innerHTML", "description"],["price_", "innerHTML", "price"], ["item", "src", "image"]].forEach((e)=>{
	//document.getElementById(e[0]).innerHTML = product[e[1]].toString();
	document.getElementById(e[0])[e[1]] = product[e[2]].toString();
})
//document.getElementById("item").src=product["image"];