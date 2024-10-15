function checkLeapYear() {

    let year = document.getElementById('yearInput').value;

    let isLeapYear = false;
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        isLeapYear = true;
    }
    
    if (isLeapYear) {
        document.getElementById('result').innerText = `${year} is a leap year.`;
    } else {
        document.getElementById('result').innerText = `${year} is not a leap year.`;
    }
}