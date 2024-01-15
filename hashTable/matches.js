var findWinners = function (matches) {
    const results = {};
    for (let index = 0; index < matches.length; index++) {
        const match = matches[index];
        const [winner, loser] = match;
        if (!results[winner]) {
            results[winner] = {
                lose: 0
            }
        }
        if (results[loser]) {
            results[loser].lose += 1;
        } else {
            results[loser] = {
                lose: 1
            }
        }
    }
    return Object.keys(results).reduce((con, ele) => {
        const player = results[ele]
        if (player.lose === 0) {
            con[0].push(+ele)
        }
        if (player.lose === 1) {
            con[1].push(+ele)
        }
        return con;
    }, [[], []])
};

matches = [[1, 3], [2, 3], [3, 6], [5, 6], [5, 7], [4, 5], [4, 8], [4, 9], [10, 4], [10, 9]]
console.log(findWinners(matches))