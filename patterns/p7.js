function printPattern(n) {
    let pattern = ''
    for (let i = 0; i < n; i++) {
        for (let j = 0; j <(n-i); j++) {
            pattern += `${n-i}`;
        }
        pattern += "\n";
    }
    console.log(pattern);
}
printPattern(5);

/*

55555
4444
333
22
1

*/