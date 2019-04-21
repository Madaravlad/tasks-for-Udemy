var budget = prompt('Ваш бюджет на месяц?');
var timeData = prompt('Введите дату в формате YYYY-MM-DD');
var appData = {
    budget : budget,
    timeData : timeData,
    expenses :{
        expensesList : cost
    },
    optionalExpenses :{

    },
    income: [],
    savings : false
};

var expensesList = prompt('Введите обязательную статью расходов в этом месяце');
var cost = prompt('Во сколько это обойдется?');
var moneyForDay = (budget-cost)/30;
console.log(appData);
alert('бюджет на одни день:' + ' ' + moneyForDay+ ' ' + 'грн');