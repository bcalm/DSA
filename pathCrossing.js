var isPathCrossing = function (path) {
    const paths = path.split("");
    const initPosition = [0, 0];
    const visitedPath = [];
    const lookup = {
        N: [0, 1],
        E: [1, 0],
        S: [0, -1],
        W: [-1, 0],
    }
    visitedPath.push(initPosition.join(","));
    for (let index = 0; index < paths.length; index++) {
        const newCord = lookup[paths[index]]
        initPosition[0] += newCord[0]
        initPosition[1] += newCord[1]
        const newPosition = initPosition.join(",");
        if (visitedPath.includes(newPosition)) {
            return true;
        }
        visitedPath.push(newPosition);
    }
    return false;
};


console.log(isPathCrossing("ENNNNNNNNNNNEEEEEEEEEESSSSSSSSSS"))