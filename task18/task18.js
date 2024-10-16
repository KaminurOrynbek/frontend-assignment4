function findMostFrequent() {
    
    const input = document.getElementById('numberInput').value;
    const arr = input.split(' ').map(Number);
    
    const frequencyMap = new Map();
    let maxCount = 0;
    let mostFrequentNum = null;

    arr.forEach(num => {
        const count = frequencyMap.get(num) || 0;
        frequencyMap.set(num, count + 1);

        if (count + 1 > maxCount) {
            maxCount = count + 1;
            mostFrequentNum = num;
        }
    });

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = mostFrequentNum !== null
        ? `The most frequent number is: ${mostFrequentNum}`
        : 'Please enter valid numbers.';
}