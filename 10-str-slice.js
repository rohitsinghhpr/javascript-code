// extracting sub string from a string

let text = 'an apple in a day keeps docter away.';
console.log(text);
let text2 =  text.slice(0,3); 
console.log(text2);
console.log(text);

// just return
// do not change orignal source
// take starting and ending - do not include ending
// if ending not provides then extract rest of the striing.

console.log(text.slice(8));