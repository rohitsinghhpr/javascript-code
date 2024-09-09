let obj1 = {
    name:"rohit",
    last:"singh",
    getInfo:function(){
        return this.name+" "+this.name;
    }
}

function print(xyz){
  console.log(this);
  console.log("-------",xyz);
}

print.call(obj1,123);

let ref = print.bind(obj1,456);
ref();

print.apply(obj1,[890]);

/*
call, bind, apply 
invoke a fun with this value and arguments
*/

print.call({name:"sjd",last:"jhgog"},454);

// what is the usecase of these functions

const person = {
  getInfo:function(){
    return [this.name,this.age];
  }
}

const person1 = {
  name:"Rohit",age:23
}

const person2 = {
  name:"Singh",age:22
}

console.log(person.getInfo.call(person1));// [ 'Rohit', 23 ]
console.log(person.getInfo.call(person2));// [ 'Singh', 22 ]

// call method with argument

const printPerson = {
  getInfo:function(n,a){
     this.name = n;
     this.age = a;
     return [n,a];
  }
}

console.log(printPerson.getInfo.call(person1,"Amit",23)); // [ 'Amit', 23 ]
console.log(printPerson.getInfo.call(person2,"Sumit",23)); // [ 'Sumit', 23 ]