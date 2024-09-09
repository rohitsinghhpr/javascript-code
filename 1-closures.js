function outer(){
   let x = 1000;
   console.log("outer -> x ->",x);
   function inner(){
      console.log("inner -> x ->",x);
      x = -1000;
      console.log("inner -> updated x ->",x);
   }
   return inner;
}

let fun = outer;
console.log(fun());
console.log(fun()());

// function x(){
//    var a = 1;
//    setTimeout(function(){
//       console.log(a);
//    },5000);
//    console.log("hello closures");
// }
// x();

// function y(){
//    for(let i=0;i<=5;i++){
//       setTimeout(function(){
//          console.log(i);
//       },i*1000);
//    }
//    console.log("hello closures in loop");
// }
// y();

function y(){
   for(var i=0;i<=5;i++){
      function clofun(i){
         setTimeout(function(){
            console.log(i);
         },i*1000);
      }
      clofun(i);
   }
   console.log("hello closures in loop");
}
y();