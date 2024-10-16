function convert() {
    const seconds = parseFloat(document.getElementById('secondsInput').value);
    
    const minutes = seconds / 60;
    const hours = seconds / 3600;
    
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `
        <strong>${seconds}</strong> seconds is equal to: <br>
        <strong>${minutes.toFixed(4)}</strong> minutes <br>
        <strong>${hours.toFixed(4)}</strong> hours
    `;
}