"use strict";
function calculateTotalMortgage(percent, contribution, amount, date) {
  // код для задачи №1 писать здесь
  if (!Number.isFinite(percent) && Number.isNaN(percent)) {
    console.log(
      `Параметр "Процентная ставка" содержит неправильное значение ${percent}`
    );
  }

  if (!Number.isFinite(contribution) && Number.isNaN(contribution)) {
    console.log(
      `Параметр "Начальный взнос" содержит неправильное значение ${contribution}`
    );
  }

  if (!Number.isFinite(amount) && Number.isNaN(amount)) {
    console.log(
      `Параметр "Общая стоимость" содержит неправильное значение ${amount}`
    );
  }

  let amountOfCredit = amount - contribution;

  let today = new Date();

  let creditTerm =
    (date.getYear() - today.getYear()) * 12 +
    date.getMonth() -
    today.getMonth();

  percent /= 100;

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
  let greeting;

  if (name) {
    greeting = `Привет, мир! Меня зовут ${name}`;
  } else {
    greeting = "Привет, мир! Меня зовут Аноним";
  }

  console.log(greeting);

  return greeting;
}
