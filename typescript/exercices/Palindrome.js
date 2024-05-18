/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    function isAlphaNumeric(code) {
        if (!(code > 47 && code < 58) && // numeric (0-9)
            !(code > 96 && code < 123)) { // lower alpha (a-z)
            return false;
        }

        return true;
    };

    s = s.toLowerCase().trim();

    let cleanedStr = '';

    for (let i = 0; i < s.length; i++) {
        const char = s.charAt(i);

        if (isAlphaNumeric(char.charCodeAt(0))) {
            cleanedStr += char;
        }
    }

    const middlePoint = cleanedStr.length % 2 == 0 ? cleanedStr.length / 2 : (cleanedStr.length - 1) / 2;

    for (let i = 0, j = cleanedStr.length - 1; i <= middlePoint, j >= middlePoint; i++, j--) {
        if (cleanedStr[i] !== cleanedStr[j]) return false;
    }

    return true;
};

isPalindrome("A man, a plan, a canal: Panama")