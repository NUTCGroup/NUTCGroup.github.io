id = Number(new URL(window.location.href).searchParams.get("product"));
snd = document.getElementById("sender");
if (Number.isInteger(id)){
	id = id%products.length;
	//snd.value = id;
	//product = products[id];
}else {
	//product = products[0];
	id = 0;
};
function loadProduct(){
	snd.value = id;
	product=products[id];
	[
		["title", "innerHTML", "name"],
		["content", "innerHTML", "description"],
		["price_", "innerHTML", "price"], 
		["item", "src", "image"]
	].forEach((e)=>{
		document.getElementById(e[0])[e[1]] = product[e[2]].toString();
	})
}
inp = document.querySelector("div#input input")
inp.oninput = function(){
    value = parseInt(this.value)
    if(value >= 1000){
        this.value = 1000
    }
    else if(value < 1000 && value >= 0){
        this.value = parseInt(this.value)
    }
    else{
        this.value = 0
    }
}

snd.onclick = function(){
	if(snd.innerText == "nop"){
		return
	}
	else if(inp.value == 0){
		snd.innerText = "nop";
		//console.log(snd.innerText)	
		setTimeout(function(){
			snd.innerText = "添加到購物車";
		},1000)
	}
	else{
		shoppingCartOnNavBar.addToCart(snd.value,parseInt(inp.value));
		inp.value = 0;
	}
}
function changePage(e){
	//window.open((location.origin+location.pathname+"?product="+((id+e)%3).toString()),"_self");
	id = (id+e)%3;
	window.history.pushState(location.pathname.substring(1), 'Title', (location.pathname+'?product=' + id.toString()));
	loadProduct();
}
loadProduct();
shoppingCartOnNavBar.displayAll();