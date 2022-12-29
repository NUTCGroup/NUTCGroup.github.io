a = 0
fetch("modal.html").then(r=>r.text()).then(m=>{
    //讀好檔案會被執行 m 為檔案內容 string
    //console.log(m); not formatted
    eval(`\`${m}\``); // formatted
}) 
