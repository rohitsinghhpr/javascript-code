
 // remains access to outrer var 
 // even after the parent fun finished exe

 function parentFun(){
    let counter = 0;
    return function childFun(){
        counter++;
        console.log("Counter",counter);
    }
 }

 let myCounter = parentFun();
 myCounter(); // 1
 myCounter(); // 2
 myCounter(); // 3
 myCounter(); // 4 
 myCounter(); // 5


 // used in callback or event lintener
