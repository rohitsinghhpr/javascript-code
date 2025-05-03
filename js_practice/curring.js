
 // fun transformed into series of functins
 function curringAdd(a){
    return (b)=>{
        return (c)=>{
            return a+b+c;
        }
    }
 }

 let a = curringAdd(5);
 let b = a(5);
 let c = b(5);
 console.log(c);
 console.log(curringAdd(1)(2)(3));