"use strict";
function calculateTotalMortgage(percent, contribution, amount, date) {
  // код для задачи №1 писать здесь
  if (Number.isNaN(percent)) {
    return `Параметр "Процентная ставка" содержит неправильное значение ${percent}`;
  } else if (Number.isNaN(contribution)) {
    return `Параметр "Начальный взнос" содержит неправильное значение ${contribution}`;
  } else if (Number.isNaN(amount)) {
    return `Параметр "Общая стоимость" содержит неправильное значение ${amount}`;
  }

  percent /= 100;

  let amountOfCredit = amount - contribution;
  const today = new Date();
  let creditTerm =
    (date.getYear() - today.getYear()) * 12 +
    date.getMonth() -
    today.getMonth();
  let payment =
    amountOfCredit *
    (percent / 12 + percent / 12 / ((1 + percent / 12) ** creditTerm - 1));
  let totalAmount = payment * creditTerm + contribution - contribution;
  totalAmount = totalAmount.toFixed(2);
  totalAmount = Number(totalAmount);

  console.log(totalAmount);

  return totalAmount;
}

function getGreeting(name) {
  // код для задачи №2 писать здесь
  let greeting = `Привет, мир! Меня зовут ${name ? name : "Аноним"}`;

  // if (name) {
  //   greeting = `Привет, мир! Меня зовут ${name}`;
  // } else {
  //   greeting = "Привет, мир! Меня зовут Аноним";
  // }

  // console.log(greeting);

  return greeting;
}
