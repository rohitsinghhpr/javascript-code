function printPattern(n) {
    let pattern = ''
    for (let i = 0; i < n; i++) {
        // space 
        for(let j=0;j<i;j++){
            pattern += " ";
        }
        // star 
        for(let j=0;j<2*n-(2*n-1);j++){
            pattern += "*";
        }
        // space 
        for(let j=0;j<i;j++){
            pattern += " ";
        }
        pattern += "\n";
    }
    console.log(pattern);
}
printPattern(5);