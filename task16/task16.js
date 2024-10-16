function countVownCons(str) {
    str = str.toLowerCase();
    let vowelCount = 0;
    let consonantCount = 0;

    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

    for (let char of str) {
        if (/[a-z]/.test(char)) { 
            if (vowels.has(char)) {
                vowelCount++; 
            } else {
                consonantCount++;
            }
        }
    }

    return {
        vowels: vowelCount,
        consonants: consonantCount
    };
}

function countVowelsAndConsonants() {
    let str = document.getElementById('num').value; 
    let result = countVownCons(str); 

    document.getElementById('result').innerHTML = `Number of vowels: ${result.vowels}<br>Number of consonants: ${result.consonants}`;
}
