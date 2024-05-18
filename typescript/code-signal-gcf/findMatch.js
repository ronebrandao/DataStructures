const vowels = { a: "a", e: "e", i: "i", o: "o", u: "u", y: "y" };

function findMatch(pattern, source) {
  const vowels = { a: "a", e: "e", i: "i", o: "o", u: "u", y: "y" };
  let matches = 0;
  // 0 = vowel
  // 1 = constant

  for (let i = 0; i < source.length; i++) {
    let j = i; // pointer
    let count = 0; //index from pointer;

    const matchesPattern = (firstPointer, patternIndex) => {
      const letter = source.charAt(firstPointer);
      if (vowels[letter] !== undefined) {
        return pattern[patternIndex] === "0"; // pattern is 0 -> vowel?
      } else {
        return pattern[patternIndex] === "1"; // pattern is 1 -> consoant?
      }
    };1

    while (count < pattern.length) {
      if (matchesPattern(j, count)) {
        j++;
        count++;
      } else {
        break;
      }
    }

    if (count === pattern.length) {
      matches++;
    }
  }

  return matches;
}

function findMatchBetter(pattern, source) {
  function checkForPattern(pattern, source, startIndex) {
    for (let offset = 0; offset < pattern.length; offset++) {
      if (pattern[offset] == "0") {
        if (vowels[source.charAt(offset + startIndex)] === undefined) {
          return 0; //not a vowel
        }
      } else {
        if (vowels[source.charAt(offset + startIndex)] !== undefined) {
          return 0; //not a consoant
        }
      }
    }

    return 1;
  }

  let ans = 0;
  for (let i = 0; i < source.length - pattern.length + 1; i++) {
    ans += checkForPattern(pattern, source, i);
  }

  return ans;
}

console.log(findMatchBetter("010", "amazing"));
console.log(findMatchBetter("100", "codesignal"));
console.log(findMatchBetter("1010", "ronecesar"));

console.log(findMatch("010", "amazing"));
console.log(findMatch("100", "codesignal"));
console.log(findMatch("1010", "ronecesar"));
