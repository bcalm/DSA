var minSteps = function (s, t) {
    const sMap = {};
    const tMap = {};
    let count = 0;
    for (let index = 0; index < s.length; index++) {
        if (sMap[s[index]]) {
            sMap[s[index]] += 1;
        } else {
            sMap[s[index]] = 1;
        }
        if (tMap[t[index]]) {
            tMap[t[index]] += 1;
        } else {
            tMap[t[index]] = 1;
        }
    }
    for (const key in tMap) {
        if (tMap[key] > sMap[key] || sMap[key] === undefined) {
            console.log(key)
            count += Math.abs(tMap[key] - (sMap[key] || 0))
        }
    }
    return count;
};

minSteps("anagram", "mangaar");  