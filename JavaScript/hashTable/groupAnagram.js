/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const lookup = {}
    for (let index = 0; index < strs.length; index++) {
        const sortedValue = strs[index].split("").sort();
        if (!lookup[sortedValue]) {
            lookup[sortedValue] = [];
        }
        lookup[sortedValue].push(strs[index]);


    }
    return Object.values(lookup);
};

strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
console.log(groupAnagrams(strs))