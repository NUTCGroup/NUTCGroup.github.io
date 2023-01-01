sender = document.getElementById("sender");
sender.onclick() = function(){
    window.open(`../productDescription?product=${this.value}`,"self");
}