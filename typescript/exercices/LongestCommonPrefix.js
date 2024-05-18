/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let smallestString = strs[0];

    for (let i = 1; i < strs.length; i++) {
        if (strs[i].length < smallestString.length) {
            smallestString = strs[i];
        }
    }

    const longestPossiblePrefix = smallestString.length - 1;
    let possiblePrefix = smallestString.substring(0, longestPossiblePrefix);

    for (let i = 0; i < strs.length; i++) {
        let isPrefixCandidate = true;
        let temp = '';
        for (let j = 0; j <= possiblePrefix; j++) {
            if (possiblePrefix.length === 1) {
                return "";
            }

            if (strs[i].charAt(j) === smallestString[j]) {
                temp += smallestString[j];
            } else {

            }
        }
    }
};

longestCommonPrefix(["flower", "flow", "flight"])