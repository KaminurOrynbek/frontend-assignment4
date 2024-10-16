function calculateDaysLeftBeforeNewYear() {
    const today = new Date();
    const currentYear = today.getFullYear();
    
    const nextYear = new Date(currentYear + 1, 0, 1);

    const timeDifference = nextYear - today;

    const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `There are <strong>${daysLeft}</strong> days left before New Year.`;
}

calculateDaysLeftBeforeNewYear();