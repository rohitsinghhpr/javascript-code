let myPromise = new Promise((resolve,reject)=>{
   if(true){
    setTimeout(()=>{
        resolve("Successfull");
    },15000);
   }else{
    reject("Fali");
   }
});

let myPromise2 = new Promise((resolve,reject)=>{
    if(true){
     setTimeout(()=>{
        resolve("Successfull");
     },5000);
    }else{
     reject("Fali");
    }
 });

console.log("Statement 1");

myPromise.then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
});

console.log("Statement 2");

// promise handling using aync and await
async function promiseHanding(){
    try {
        let result = await myPromise2;
        console.log("promiseHanding Result",result);
    } catch (error) {
        console.log("promiseHanding Error",error);
    }
}

console.log("Statement 3");
promiseHanding();
console.log("Statement 4");
