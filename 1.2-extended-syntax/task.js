function getResult(a, b, c) {
  // код для задачи №1 писать здесь
  "use strict";
  const discriminant = Math.pow(b, 2) - 4 * a * c;
  const x = [];
  if (discriminant === 0) {
    x[0] = -b / (2 * a);
  } else if (discriminant > 0) {
    x[0] = (-b + Math.sqrt(discriminant)) / (2 * a);
    x[1] = (-b - Math.sqrt(discriminant)) / (2 * a);
  }

  return x;
}

function getAverageMark(marks) {
  // код для задачи №2 писать здесь
  let count = 0;
  let sum = 0;
  for (mark of marks) {
    count += 1;
    if (count === 6) {
      console.log("Количество оценок больше пяти");
      marks.splice(5);
      count = 5;
      break;
    } else if (count <= 5) {
      sum += mark;
    } else continue;
  }
  if (count === 0) {
    return 0;
  }

  return (averageMark = sum / count);
}

function askDrink(name, dateOfBirthday) {
  // код для задачи №3 писать здесь
  dateOfBirthday = dateOfBirthday.getFullYear();
  if (new Date().getFullYear() - dateOfBirthday > 18) {
    return `Не желаете ли олд-фэшн, ${name}?`;
  } else {
    return `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
  }

  // return result;
}
