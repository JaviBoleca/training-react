export const expensesStats = (itemsList) => {
    if (itemsList.length === 0) {
        return [0, 0];
    }

    let incomes = 0, expenses = 0, total = 0;

    itemsList.forEach((item) => {
        if (item.money.income) {
            incomes += item.money.amount;
        } else {
            expenses += item.money.amount;
        }
    });

    total = Math.abs(Math.abs(incomes) + Math.abs(expenses));
     //Math.abs() returns the absolute value of a number
    let incomesPercentage = Math.round((incomes / total) * 100);
    let expensesPercentage = Math.round((expenses / total) * 100);

    return [incomesPercentage, expensesPercentage];
};