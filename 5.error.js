try {
    console.log(y);
    // code     
} catch (error) {
   console.log("name",error.name);
   console.log("message",error.message);
   // handle code
} finally{
    // clearup code.
    // run for both try block and catch block
    console.log("running the finally code block");
}
