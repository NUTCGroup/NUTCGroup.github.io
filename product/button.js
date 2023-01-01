sender = document.getElementById("sender");
console.log("yahhh")
sender.onclick() = function(){
    window.open(`../productDescription?product=${this.value}`,"self");
}