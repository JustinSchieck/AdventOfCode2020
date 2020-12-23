import { inputMap } from './input.js';
const howManyTrees = (data) => {
    let x = 0;
    let count = 0;
    const formattedData = data.split('\n');

    for (let y = 0; y < formattedData.length; y++) {
        let line = formattedData[y].split('');
        if (line[x] == '#') {
            count++;
        }
        x = x + 3;
        if (x >= line.length) {
            x = x - line.length;
        }
    }
    return count;
};

console.log(howManyTrees(inputMap));