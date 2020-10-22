// Задача №1

function parseCount(count) {
    const newCount = Number.parseInt(count)
    if (isNaN(newCount)) {        
        throw new Error('Невалидное значение');
    } else {
        return newCount;
    };
};

function validateCount(count) {    
    try {
        parseCount(count);
    } catch(e) {        
        return e;       
    };
    return parseCount(count);
};


//Задача №2

class Triangle{
    constructor(aB, bC, cA){
       if ((aB + bC) < cA || (bC + cA) < aB || (cA + aB) < bC) {
           throw new Error('Треугольник с такими сторонами не существует');
       } else {
           this.firstSide = aB;
           this.secondSide = bC;
           this.thirdSide = cA;
       }; 
    };
    getPerimeter(){
        const a = this.firstSide;
        const b = this.secondSide;
        const c = this.thirdSide;
        return a + b + c;
    };
    getArea(){
        const a = this.firstSide;
        const b = this.secondSide;
        const c = this.thirdSide;
        const p = this.getPerimeter() / 2;
        const s = Math.sqrt(p * ((p - a) * (p - b) * (p - c)));
        return Number(s.toFixed(3));
    };    
};

function getTriangle(a, b, c) {
    try{
        new Triangle(a, b, c); 
    } catch {
        return { 
            getArea: () => `Ошибка! Треугольник не существует`,
            getPerimeter: () => `Ошибка! Треугольник не существует`
        };       
    }; 
    return new Triangle(a, b , c);
};