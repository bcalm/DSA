var closeStrings = function (word1, word2) {
    if (word1.length != word2.length) {
        return false;
    }
    const  = {};
    const word2Map = {};

    for (let index = 0; index < word1.length; index++) {
        if (word1Map[word1[index]]) {
            word1Map[word1[index]] += 1;
        } else {
            word1Map[word1[index]] = 1;
        }
        if (word2Map[word2[index]]) {
            word2Map[word2[index]] += 1;
        } else {
            word2Map[word2[index]] = 1;
        }
    }
    if (Object.keys(word1Map).sort().join("") !== Object.keys(word2Map).sort().join("")) {
        return false
    }
    return Object.values(word1Map).sort().join("") === Object.values(word2Map).sort().join("")

};


word1 = "abc", word2 = "bca"
console.log(closeStrings(word1, word2))