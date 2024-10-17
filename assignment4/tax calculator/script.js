function calculateTax() {
    let carPrice = document.getElementById('carPrice').value;
    let tax;

    if (carPrice > 10000) {
        tax = carPrice * 0.25;
    } else if (carPrice >= 5000 && carPrice <= 10000) {
        tax = carPrice * 0.20;
    } else if (carPrice < 5000) {
        tax = carPrice * 0.15;
    } else {
        tax = 0;
    }

    document.getElementById('result').innerText = `Tax: $${tax.toFixed(2)}`;
}