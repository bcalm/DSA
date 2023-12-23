var maxWidthOfVerticalArea = function(points) {
  const sortedPoints = points.map(point => point[0]).sort((a,b) => a-b);
  let max = 0;
  for (let index = 1; index < sortedPoints.length-1; index+=2) {
    const width1 = sortedPoints[index] - sortedPoints[index-1]
    const width2 = sortedPoints[index+1] - sortedPoints[index]
    max = Math.max(width2, max, width1);
  }
  return max;
};

console.log(maxWidthOfVerticalArea([[3,1],[9,0],[1,0],[1,4],[5,3],[8,8]]))