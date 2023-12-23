// There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings.
// You are giving candies to these children subjected to the following requirements:
// Each child must have at least one candy.
// Children with a higher rating get more candies than their neighbors.
// Return the minimum number of candies you need to have to distribute the candies to the children.

var candy = function (ratings) {
    const candies = new Array(ratings.length).fill(1);

    for (let index = 1; index < ratings.length; index++) {
        if (ratings[index] > ratings[index - 1]) {
            if (candies[index] <= candies[index - 1]) {
                candies[index] = candies[index - 1] + 1;
            }
        }
    }


    for (let index = ratings.length - 2; index >= 0; index--) {
        if (ratings[index] > ratings[index + 1]) {
            if (candies[index] <= candies[index + 1]) {
                candies[index] = candies[index + 1] + 1;
            }
        }
    }
    return candies.reduce((con, ele) => con + ele);
};

console.log(candy([1, 3, 4, 5, 2]));