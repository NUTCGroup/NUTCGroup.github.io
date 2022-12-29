//"image" "title" "detail"
product = [
	{
		"image": "",
		"title": "title here",
		"detail": "內容哈哈"
	},
	{
		"image": "",
		"title": "title here",
		"detail": "內容哈哈"
	},
	{
		"image": "",
		"title": "title here",
		"detail": "內容哈哈"
	}
]
fetch("modal.html").then(r=>r.text()).then(m=>{
	//讀好檔案會被執行 m 為檔案內容 string
	//console.log(m); not formatted
	//eval(`\`${m}\``); // formatted
	d = document.documentElement.getElementsByTagName("body")[0]
	product.forEach(p=>{
		d.innerHTML += (eval(`\`${m}\``));
	});
}) 
