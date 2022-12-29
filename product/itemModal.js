//"image" "title" "detail"
product = [
	{
		"image": "../image/5.jpeg",
		"title": "原味鮮奶酪",
		"detail": "「單純最能吃出食材的品質」。無其他添加物、細緻柔滑的口感，輕輕一抿就化成醇 醇奶香。"
	},
	{
		"image": "../image/6.jpg",
		"title": "杏仁鮮奶酪",
		"detail": "杏仁片研磨後熬煮而成，在保有奶味的同時，也不會搶走杏仁的風采，每一口都充滿濃濃的杏仁香。"
	},
	{
		"image": "../image/7.jpg",
		"title": "芋頭鮮奶酪",
		"detail": "芋頭炊熟後手工研磨成芋泥，最大限度保留芋頭香氣與Q彈 口感，不甜不膩，值得您細細品味。"
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
