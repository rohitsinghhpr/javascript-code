/*
       *
      * *
     * * *
    * * * * 
   * * * * *
*/

// check notebook...

function printPattern(n) {
    let pattern = ''
    for (let i = 0; i < n; i++) {
        // space 
        for(let j=0;j<n-1-i;j++){
            pattern += " ";
        }
        // star 
        for(let j=0;j<2*i+1;j++){
            pattern += "*";
        }
        // space 
        for(let j=0;j<n-1-i;j++){
            pattern += " ";
        }
        pattern += "\n";
    }
    console.log(pattern);
}
printPattern(5);