function findMostFrequent() {
    // Get the user input and split it into an array of numbers
    const input = document.getElementById('numberInput').value;
    const arr = input.split(' ').map(Number); // Convert the input into an array of numbers

    const frequencyMap = {}; // Create an empty object to store frequencies
    let maxCount = 0; // This will keep track of the highest count
    let mostFrequentNum = null; // This will store the most frequent number

    // Loop through each number in the array
    for (let num of arr) {
        // Check if the number is already in the frequency map
        if (frequencyMap[num]) {
            frequencyMap[num]++; // If it is, increase the count
        } else {
            frequencyMap[num] = 1; // If not, set it to 1
        }

        // Check if the current number's count is greater than maxCount
        if (frequencyMap[num] > maxCount) {
            maxCount = frequencyMap[num]; // Update maxCount
            mostFrequentNum = num; // Update the most frequent number
        }
    }

    // Show the result on the webpage
    const resultElement = document.getElementById('result');
    if (mostFrequentNum !== null) {
        resultElement.innerHTML = `The most frequent number is: ${mostFrequentNum}`;
    } else {
        resultElement.innerHTML = 'Please enter valid numbers.';
    }
}