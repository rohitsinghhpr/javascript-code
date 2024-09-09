
// map method

let num = [43,54,44,66,75,45,76546,,25,54,5,6];
let l=0,g=0;
num.map((ele)=>{
  if(ele<50){
   console.log('less than 50 is ->',ele);
   l++;
  }else{
   console.log('greater than 50 is ->',ele);
   g++;
  }
});
console.log(l);
console.log(g);

// filter method

let arr = [11,22,33,44,55];
console.log("arr->",arr);
// taking a arr test 
let new_arr = arr.filter(test);
function test(value,index,itslef){
  console.log("value->",value,"index->",index,"itslef->",itslef);
//   if(value !== 33){
//    return value;
//   }
//  return value !== 44;
return index !== 1;
}
console.log("new_arr->",new_arr);
