function parent(){
    // var i = 1;
    // setTimeout(()=>{console.log(i)},i*1000);
    // i = 2;
    // setTimeout(()=>{console.log(i)},i*1000);
    // i = 3;
    // setTimeout(()=>{console.log(i)},i*1000);
    // i = 4;
    // setTimeout(()=>{console.log(i)},i*1000);
    // i = 5;
    // setTimeout(()=>{console.log(i)},i*1000);
    {
        let i = 1;
        setTimeout(()=>{console.log(i)},i*1000);
    }
    {
        let i = 2;
        setTimeout(()=>{console.log(i)},i*1000);
    }
    {
        let i = 3;
        setTimeout(()=>{console.log(i)},i*1000);
    }
    {
        let i = 4;
        setTimeout(()=>{console.log(i)},i*1000);
    }
    {
        let i = 5;
        setTimeout(()=>{console.log(i)},i*1000);
    }

}
// parent();

/*

5
5
5
5
5
5 

because of closures 
because its rerember to its lexical env var ref not value.

*/

function parent2(){
    for(var i=0;i<6;i++){
       ((i)=>{
        setTimeout(()=>{console.log(i)},i*1000);
       })(i)
    }
}
parent2()

function sum(num){
    return (num2)=>{ 
      return num+num2;
    }
}
console.log("sum",sum(2)(3));

