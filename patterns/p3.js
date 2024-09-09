function printPattern(n) {
    let pattern = ''
    for (let i = 0; i < n; i++) {
        for (let j = 0; j <=i; j++) {
            pattern += `${j+1}`;
        }
        pattern += "\n";
    }
    console.log(pattern);
}
printPattern(5);

/*

1
12
123
1234
12345

*/