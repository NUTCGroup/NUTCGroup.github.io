a = 0
fetch("modal.html").then(r=>r.text()).then(t=>{
    console.log(t);
    a+=1;
})