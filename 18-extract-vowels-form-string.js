// extract vowels form string 

let str = 'qwertyuiopasdfghjklzxcvbnm';
let str_arr = new Array();

for(let i=0;i<str.length;i++){
   // console.log(str[i]);
   str_arr.push(str[i]);
}

// couting vowels, contants
let v=0,c=0;

for(let i=0;i<str_arr.length;i++){
   if(str_arr[i]=='a'||str_arr[i]=='e'||str_arr[i]=='i'||str_arr[i]=='i'||str_arr[i]=='o'){
      console.log(`${str_arr[i]} -> is a vowel`);
      v++;
   }
   else{
      console.log(`${str_arr[i]} -> is not a vowel`);
      c++;
   }
}

console.log(`${str} contains ${v} vowels`);
console.log(`${str} contains ${c} contants`);




