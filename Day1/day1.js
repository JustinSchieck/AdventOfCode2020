/**
Specifically, they need you to find the two entries that sum to 2020 and then multiply those two numbers together.
For example, suppose your expense report contained the following:

1721
979
366
299
675
1456

In this list, the two entries that sum to 2020 are 1721 and 299. Multiplying them together produces 1721 * 299 = 514579, so the correct answer is 514579.
Of course, your expense report is much larger. Find the two entries that sum to 2020; what do you get if you multiply them together?
 */

export const expenseReport = (data) => {
    const dataArray = data.split('\n').map(number => parseInt(number, 10))

    for (let i = 0; i <= dataArray.length; i++) {
        let target = 2020 - dataArray[i];
        if (dataArray.includes(target)) {
            return dataArray[i] * target;
        }
    }
};
