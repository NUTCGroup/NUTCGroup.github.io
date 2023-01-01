//"image" "title" "detail"
product = [
	{
		"image": "../image/originalCotta.jpeg",
		"title": "原味鮮奶酪",
		"detail": "鮮奶酪，在一定的溫度下，精選之牛乳在發酵中動舞，能展現祂十足的魅力。<br>使用最鮮醇的牛乳，將帶給你無盡的美味，夾雜的不是多餘的滋味，是那牛乳的鮮與甜，對喜歡純樸的滿滿的饗宴。",
		"price": 40,
		"product": 0
	},
	{
		"image": "../image/almondCotta.jpg",
		"title": "杏仁鮮奶酪",
		"detail": "杏仁帶著獨特杏香，與鮮奶共舞著，譜出使人陶醉的樂章。<br>特選杏仁，沒有那多餘的苦澀，完整杏香使原本足夠鮮甜的奶酪，變得更加香甜美味，對喜歡杏香的你，豈不是不可不選的嗎？",
		"price": 45,
		"product": 1
	},
	{
		"image": "../image/taroCotta.jpg",
		"title": "芋頭鮮奶酪",
		"detail": "鮮甜的芋頭，是帶動味蕾的使者，鼓舞著，勝過傳統。<br>嚴格挑選，才能發掘芋頭最純真的香，與奶酪的結合，讓味覺更進一步的體驗，奶酪與芋頭的交響樂，對芋頭情有獨鍾的你，就不要猶豫了。",
		"price": 45,
		"product": 2
	}
]
fetch("modal.html").then(r=>r.text()).then(m=>{
	//讀好檔案會被執行 m 為檔案內容 string
	//console.log(m); not formatted
	//eval(`\`${m}\``); // formatted
	var d = document.documentElement.getElementsByTagName("body")[0]
	product.forEach((p,i)=>{
		console.log(typeof i);
		d.innerHTML += (eval(`\`${m}\``));
	});
	d.innerHTML += "<script src='button.js'></script>"
}) 