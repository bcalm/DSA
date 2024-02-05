/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    const lookup = {};
    for (let index = 0; index < s.length; index++) {
        const element = s[index];
        if (lookup[element] || lookup[element] === 0) {
            lookup[element] = 99999;
        } else {
            lookup[element] = index;
        }
    }
    const occurences = Object.values(lookup).sort((a, b) => a-b);
    console.log(lookup, occurences)
    return occurences[0] === 99999 ? -1 : occurences[0];
};

console.log(firstUniqChar("loveleetcode"))