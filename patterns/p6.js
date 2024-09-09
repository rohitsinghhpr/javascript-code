function printPattern(n) {
    let pattern = ''
    for (let i = 0; i < n; i++) {
        for (let j = 0; j <(n-i); j++) {
            pattern += `${j+1}`;
        }
        pattern += "\n";
    }
    console.log(pattern);
}
printPattern(5);

/*

12345
1234
123
12
1

*/