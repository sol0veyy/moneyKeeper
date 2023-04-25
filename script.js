let money;
let time;

money = prompt("Ваш бюджет на месяц?", "");
time = prompt("Введите дату в формате YYYY-MM-DD", "");
let answer1 = prompt("Введите обязательную статью расходов в этом месяце", "")
let answer2 = prompt("Во сколько обойдется", "")

let appData = {
    budget: money,
    timeData: time,
    expenses: {
        answer1:answer2,
    },
    optionalExpenses: {},
    income: [],
    savings: false
}

alert("Бюджет на 1 день: " + money / 30 + " руб.")
