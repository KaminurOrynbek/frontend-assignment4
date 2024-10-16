function factorial() {
    let n = parseFloat(document.getElementById('fact').value);
    let result = fact(n);
    document.getElementById('result').innerHTML = `Factorial of ${n} is ${result}`;
}

function fact(n) {
    if(n===0 || n===1){
        return 1;
    } else {
        return n * fact(n-1);
    }
}