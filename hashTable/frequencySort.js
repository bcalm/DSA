/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
    const frequencyMap = {};
    for (const character of s) {
        frequencyMap[character] = (frequencyMap[character] || 0) + 1;
    }
    const uniqueCharacters = Object.keys(frequencyMap);
    uniqueCharacters.sort((a, b) => frequencyMap[b] - frequencyMap[a])
    return uniqueCharacters.reduce((result, character) =>
        result + character.repeat(frequencyMap[character]), "");
};


console.log(frequencySort("tree"))