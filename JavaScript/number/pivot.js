const pivot = (number) => {
    const numbers = [];
    let prefixSum = 0;
    for (let index = 1; index <= n; index++) {
        numbers.push([prefixSum])
        prefixSum += index;
        numbers
    }

}

console.log(pivot(8))