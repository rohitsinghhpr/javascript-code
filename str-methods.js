// string - can be written inside in '' or "" quotes.
let str1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let result = null;
// properties 
console.log(str1.length);
// methods 

// trim() - remove space

str1 = ' space ';
console.log('start',str1,'end');
console.log('start',str1.trim(),'end');
console.log('start',str1.trimStart(),'end');
console.log('start',str1.trimEnd(),'end');

result = str1.trim(); // nre str rtr and does not change anything.
console.log(str1);
console.log(result);

// replace

str1 = 'this is the new string';
console.log(str1);
result = str1.replace("new","old"); // nre str rtr and does not change anything.
console.log(result);
console.log(str1);

// charAt() 
result = str1.charAt(3);
console.log("charAt 3 is",result);

// charCodeAt()
result = str1.charCodeAt(2);
console.log("charCodeAt 2 is",result);

// split()
result = str1.split(' '); 
console.log("split",result);
