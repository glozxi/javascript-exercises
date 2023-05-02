const palindromes = function (string) {
    const regexPattern = /[^A-Za-z0-9]/g;
    const strArr = string.toLowerCase().replace(regexPattern, "").split("");
    let start = 0;
    let end = strArr.length - 1;
    while (end > start) {
        if (strArr[start] !== strArr[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
