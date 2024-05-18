/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    const map = new Map();

    if (s.length !== t.length) return false;

    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            const count = map.get(s[i]);
            map.set(s[i], count + 1)
        } else {
            map.set(s[i], 1);
        }

    }

    for (let i = 0; i < t.length; i++) {
        if (!map.has(t[i]) || map.get(t[i]) === 0) {
            return false;
        } else {
            map.set(t[i], map.get(t[i]) - 1)
        }
    }

    return true;
};

isAnagram("anagram", "nagaram");