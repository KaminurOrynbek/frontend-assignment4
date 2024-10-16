function convertToFahrenheit() {
    let celsius = parseFloat(document.getElementById('celsius').value);
    if (!isNaN(celsius)) {
        let fahrenheit = (celsius * 9 / 5) + 32; 
        document.getElementById('fahrenheit').value = fahrenheit;
        document.getElementById('result').innerHTML = `${celsius}°C = ${fahrenheit}°F`; 
    } else {
        document.getElementById('result').innerHTML = ""; 
    }
}


function convertToCelsius() {
    let fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
    if (!isNaN(fahrenheit)) {
        let celsius = (fahrenheit - 32) * 5 / 9; 
        document.getElementById('celsius').value = celsius;
        document.getElementById('result').innerHTML = `${fahrenheit}°F = ${celsius}°C`;
    } else {
        document.getElementById('result').innerHTML = ""; 
    }
}