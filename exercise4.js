const prompts = require('prompts');

function isPalindrome(word) {
    // remove spaces and aplly lower case
    const wordTrimmed = word.trim().toLowerCase();
    // middle of string array
    const middle = Math.ceil(wordTrimmed.length / 2);
    const isOdd = wordTrimmed.length % 2 !== 0;

    // slices first face
    const beginToMiddle = wordTrimmed.slice(0, middle);
    // slices second face, if is an odd value slice starts in middle -1
    const middleToEnd = wordTrimmed.slice(isOdd ? middle - 1 : middle, wordTrimmed.length);
    // reverse second face
    const middleToEndReversed = [...middleToEnd].reverse().join("");

    if (beginToMiddle === middleToEndReversed) {
        return true;
    }
    return false;
}

async function run() {
    const response = await prompts({
        type: 'text',
        name: 'answer',
        message: 'Enter a word:'
    });

    console.log(`${response.answer} is a palindrome word?`, isPalindrome(response.answer));
}

module.exports = run;