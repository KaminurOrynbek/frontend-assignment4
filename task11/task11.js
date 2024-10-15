function convertToFahrenheit() {
    let celsius = parseFloat(document.getElementById('celsius').value);
    if (!isNaN(celsius)) {
        let fahrenheit = (celsius * 9 / 5) + 32; 
        document.getElementById('fahrenheit').value = fahrenheit.toFixed(2);
        document.getElementById('result').innerText = `${celsius}°C = ${fahrenheit.toFixed(2)}°F`; 
    } else {
        document.getElementById('result').innerText = ""; 
    }
}


function convertToCelsius() {
    let fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
    if (!isNaN(fahrenheit)) {
        let celsius = (fahrenheit - 32) * 5 / 9; 
        document.getElementById('celsius').value = celsius.toFixed(2);
        document.getElementById('result').innerText = `${fahrenheit}°F = ${celsius.toFixed(2)}°C`;
    } else {
        document.getElementById('result').innerText = ""; 
    }
}