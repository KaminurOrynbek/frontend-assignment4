function calculateDistance(parallaxAngle) {
    if (parallaxAngle <= 0) {
        return "Invalid parallax angle. It must be greater than 0.";
    }
    const distance = 1 / parallaxAngle;
    return `The distance to the star is approximately ${distance.toFixed(2)} parsecs.`;
}

function estimateStarAge(mass) {
    if (mass <= 0) {
        return "Invalid mass. It must be greater than 0.";
    }
    const age = (mass > 1) ? (10 / mass).toFixed(2) : (10 * Math.pow(mass, 2)).toFixed(2);
    return `The estimated age of the star is approximately ${age} billion years.`;
}

function lightYearsToKilometers(lightYears) {
    if (lightYears < 0) {
        return "Invalid distance. It cannot be negative.";
    }
    const kilometers = lightYears * 9.461e12; // 1 light year = 9.461 trillion kilometers
    return `${lightYears} light years is approximately ${kilometers.toFixed(2)} kilometers.`;
}

function displayDistance() {
    const parallaxAngle = parseFloat(document.getElementById("parallaxAngle").value);
    const result = calculateDistance(parallaxAngle);
    document.getElementById("distanceResult").innerText = result;
}

function displayStarAge() {
    const mass = parseFloat(document.getElementById("mass").value);
    const result = estimateStarAge(mass);
    document.getElementById("ageResult").innerText = result;
}

function displayKilometers() {
    const lightYears = parseFloat(document.getElementById("lightYears").value);
    const result = lightYearsToKilometers(lightYears);
    document.getElementById("distanceConversionResult").innerText = result;
}
