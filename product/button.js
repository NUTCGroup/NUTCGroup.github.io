sender = [...document.getElementsByClassName("sender")];
console.log("yahhh");
for(i=0; i<sender.length; i++){
    sender[i].onclick() = function(){
        window.open(`../productDescription?product=${this.value}`,"self");
    }
}