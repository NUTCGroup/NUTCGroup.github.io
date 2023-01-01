sender = [...document.getElementsByClassName("sender")];
for(i=0; i<sender.length; i++){
    console.log("yahhh")
    sender[i].onclick() = function(){
        window.open(`../productDescription?product=${this.value}`,"self");
    }
}