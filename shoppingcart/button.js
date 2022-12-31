countinput = [...document.getElementsByClassName("countinput")]
for(i = 0;i < countinput.length;i++){
    countinput[i].value = 0
    countinput[i].max = 100
    countinput[i].min = 0
    countinput[i].style.textAlign= "right"
    countinput[i].oninput = function(){
        value = parseInt(this.value)
        if(value >= 100){
            this.value = 100
        }
        else if(value < 100 && value >= 0){
            this.value = parseInt(this.value)
        }
        else{
            this.value = 0
        }
    }
}
