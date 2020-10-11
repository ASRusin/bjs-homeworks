"use strict";

// Задание №1:
function getSolutions(a,b,c) {
    let d = Math.pow(b, 2) - 4 * a * c;
    if (d < 0) {
        return {D: d, roots: []};
    } else if (d === 0) {
        let x1 = (- b) / (2 * a);
        return {D: d, roots: [x1]};
    } else if (d > 0) {
        let x1 = ((- b) + Math.sqrt(d) ) / (2 * a);
        let x2 = ((- b) - Math.sqrt(d) ) / (2 * a);
        return {D: d, roots: [x1, x2]};
    };
};

function showSolutionsMessage(a,b,c) {
    let result = getSolutions(a,b,c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    if (result.roots.length === 0){
        console.log(`Уравнение не имеет вещественных корней`);
    } else if (result.roots.length === 1){
        console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
    } else if (result.roots.length === 2){
        console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
    };
};

// Проверки:
showSolutionsMessage(1,2,3);
showSolutionsMessage(7,20,-3);
showSolutionsMessage(2,4,2);

//Задача №2:
function getAverageMark(marks) {
    if (marks.length === 0) {
        return 0;
    };
    let sum = 0;
    for (let mark of marks) {
        sum += mark;
    };
    return sum / (marks.length);
};

function getAverageScore(data) {    
    let count = 0;
    let average = 0;
    if (Object.keys(data).length === 0){
        data.average = 0;
        return data;
    };
    for (let item in data) {
        data[item] = getAverageMark(data[item]);
        average += data[item];
        count++
    };
    data.average = average / count;
    return data;
};

//Проверки:
console.log(getAverageScore({}));
console.log(getAverageScore({
    algebra: [2,4,5,2,3,4],
    geometry: [2,4,5],
    russian: [3,3,4,5],
    physics: [5,5],
    music: [2,2,6],
    english: [4,4,3],
    poetry: [5,3,4],
    chemistry: [2],
    french: [4,4]
}));
console.log(getAverageScore({
    algebra: [2,4,5,2,3,4,2],
    geometry: [2,4,5,4],
    russian: [3,3,4,5,4,3],
    physics: [5,5,2,2],
    music: [2,2,3,5,4]    
}));
console.log(getAverageScore({
    algebra: [2,4,5,2,3,4],
    geometry: [2,4,5],
    russian: [3,3,4,5],
    physics: [5,5],
    music: [2,2,6],
    english: [4,4,3],
    poetry: [5,3,4],
    chemistry: [2],
    french: [4,4],
    psychology: [5,5,5,4,3,2,1],
    informatics: [4,5,4,5,5]
}));

//Задача №3:
function getDecodedValue(secret) {
    if (secret === 1){
        return 'Эмильо';        
    } else {
        return 'Родриго';
    };
};

function getPersonData(secretData){
    let decoding = {
        firstName: getDecodedValue(secretData.aaa),
        lastName: getDecodedValue(secretData.bbb)
    };
    return decoding;
}

//Проверки:

console.log(getPersonData({
    aaa: 0,
    bbb: 0
}));
console.log(getPersonData({
    aaa: 1,
    bbb: 0
}));
console.log(getPersonData({
    aaa: 0,
    bbb: 1
}));
console.log(getPersonData({
    aaa: 1,
    bbb: 1
}));