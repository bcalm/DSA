/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const lookup = {}
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if(lookup[element]) {
            lookup[element] += 1;
        } else{
            lookup[element] = 1;
        }
    }
    const occurences = Object.values(lookup);
    return occurences.length === new Set(occurences).size
};

console.log(uniqueOccurrences([1,2,2,1,1,3]))