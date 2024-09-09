// creating a string from the litrals

let text = 'this is a string';

// creating a string from a String constructor with new keyword

let text2 = new String("this is a string");

if(text==text2){
    console.log("both are same");
    if(text===text2){
        console.log('both are same as value as data type');
    }else{
        console.log('same but data type is not same');
    }
}