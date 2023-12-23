 const createMap = (ransomNote) => {
    return ransomNote.split("").reduce((map, character) => {
        map[character] = map[character] ? map[character] + 1 : 1;
        return map;
    }, {});
 }

var canConstruct = function(ransomNote, magazine) {
    console.log(ransomNote.size)
    const ransomMap = createMap(ransomNote);
    const magazineMap = createMap(magazine);
    return Object.keys(ransomMap).every(character => {
        const ransomMapCharacterLength = ransomMap[character];
        const magazineCharacterLength = magazineMap[character];
        return magazineCharacterLength && magazineCharacterLength >= ransomMapCharacterLength;
    })
};

console.log(canConstruct("a", "b"));
console.log(canConstruct("aa", "ab"));
console.log(canConstruct("aa", "aab"));