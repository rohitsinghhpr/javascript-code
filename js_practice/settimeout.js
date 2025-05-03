let id = setTimeout(()=>{
    console.log("will give id");
},1000);
console.log(id);
clearTimeout(id);
console.log(id);