function fibonacci() {
    let n = parseFloat(document.getElementById('fib').value); 
    let result = fib(n); 
    document.getElementById('result').innerText = `Fibonacci of ${n} is ${result}`;
}

function fib(n) {
    if (n === 0) {
        return 0; 
    } else if (n === 1) {
        return 1; 
    } else {
        return fib(n - 1) + fib(n - 2); 
    }
}
