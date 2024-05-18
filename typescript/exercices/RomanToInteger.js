/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const roman = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 };

    let n = s.length - 1;
    let sum = 0;

    while (n >= 0) {
        if (s.charAt(n) === 'V' || s.charAt(n) === 'X') {
            if (n > 0 && s.charAt(n - 1) === 'I') {
                sum += roman[s.charAt(n)] - 1;
                n -= 2;
                continue;
            }
        } else if (s.charAt(n) === 'L' || s.charAt(n) === 'C') {
            if (n > 0 && s.charAt(n - 1) === 'X') {
                sum += roman[s.charAt(n)] - 10;
                n -= 2;
                continue;
            }
        } else if (s.charAt(n) === 'D' || s.charAt(n) === 'M') {
            if (n > 0 && s.charAt(n - 1) === 'C') {
                sum += roman[s.charAt(n)] - 100;
                n -= 2;
                continue;
            }
        }
        sum += roman[s.charAt(n)];
        n--;
    }

    return sum;
};

romanToInt("MCMXCIV");