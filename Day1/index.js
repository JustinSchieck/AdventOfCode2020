import { report } from './input.js';
export const expenseReport = (data) => {
    const dataArray = data.split('\n').map(number => parseInt(number, 10))

    for (let i = 0; i <= dataArray.length; i++) {
        let target = 2020 - dataArray[i];
        if (dataArray.includes(target)) {
            return dataArray[i] * target;
        }
    }
};


export const expenseReportThree = (data) => {
    const dataArray = data.split('\n').map(number => parseInt(number, 10))

    const awnserOne = expenseReport(data);
    let awnserTwo = 0;
    for (let i = 0; i <= dataArray.length; i++) {
        for (let n = 0; n <= dataArray.length; n++) {
            let target = 2020 - dataArray[i] - dataArray[n];
            if (dataArray.includes(target)) {
                awnserTwo = dataArray[i] * dataArray[n] * target;
            }
        }
    }
    return `Expense Report One: ${awnserOne}, Expense Report Two: ${awnserTwo}`;
};

console.log(expenseReportThree(report));