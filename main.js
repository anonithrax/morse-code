const morseCodeMap = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 
    'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 
    'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..', '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', 
    '6': '-....', '7': '--...', '8': '---..', '9': '----.', '.': '.-.-.-', ',': '--..--', '?': '..--..', "'": '.----.', '!': '-.-.--', '/': '-..-.', 
    '(': '-.--.', ')': '-.--.-', '&': '.-...', ':': '---...', ';': '-.-.-.', '=': '-...-', '+': '.-.-.', '-': '-....-', '_': '..--.-', 
    '"': '.-..-.', '$': '...-..-', '@': '.--.-.', ' ': '/'
};

const inverseMorseCodeMap = {};
for (const key in morseCodeMap) {
    inverseMorseCodeMap[morseCodeMap[key]] = key;
}

const input = document.getElementById('input');
const output = document.getElementById('output');

input.addEventListener('input', function () {
    const inputValue = input.value.trim().toUpperCase();
    let result = '';

    if (inputValue.includes('.') || inputValue.includes('-')) { // Morse to text
        const morseCodes = inputValue.split(' ');
        for (const code of morseCodes) {
            result += inverseMorseCodeMap[code] || '';
        }
    } else { // Text to Morse
        for (const char of inputValue) {
            result += morseCodeMap[char] + ' ';
        }
    }

    output.value = result;
});
