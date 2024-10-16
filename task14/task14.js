function calculateArea() {

    let a = parseFloat(document.getElementById('side1').value);
    let b = parseFloat(document.getElementById('side2').value);
    let c = parseFloat(document.getElementById('side3').value);

    let s = (a + b + c) / 2;

    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    document.getElementById('result').innerHTML = `Area of the triangle: ${area}`;
}