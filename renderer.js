// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
// window.setInterval(function(){getpr()},100);
function getpr(){


    // //获取内存
    // var text = "剩余内存:"+process.getSystemMemoryInfo().free/1024+"M";
    // text = text+'<br>';
    // text +="总内存:"+process.getSystemMemoryInfo().total/1024+"M";

    // document.getElementById("content").innerHTML=text;
    // console.log("get",process.getSystemMemoryInfo()) ;   
//-----------------------------------------------------------------------
    //添加通知
    // let myNotification = new Notification('版本有更新', {
    //     body: '版本你又更新了版本你又更新了版本你又更新了版本你又更新了版本你又更新了'
    //     +'dadasdsadaasd'
    //   })
      
    //   myNotification.onclick = () => {
       
    //     console.log('通知被点击')
    //   }

    
}
const fs = require('fs');
const dragEvent = document.getElementById("PT");
dragEvent.addEventListener("drop",(e)=>{
    e.preventDefault();
    const files = e.dataTransfer.files;
    if(files && files.length>=1){
        const path = files[0].path;
        document.getElementById("filePath").innerHTML=path;
        document.getElementById("fileName").innerHTML=files[0].name;    



    }
})
