//Задача 1:

console.clear();
const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];
function getNames(){
    return weapons.map(item => item.name);
};

function getCountReliableWeapons(item) {
    return weapons.filter(weapon => weapon.durability > item).length;
};

function hasReliableWeapons(item) {
    return weapons.some(weapon => weapon.durability > item);
};

function getReliableWeaponsNames(item) {
    return weapons
    .filter(weapon => weapon.durability > item)
    .map(weapon => weapon.name);
};

function getTotalDamage() {
    return weapons.reduce((a, damage) => a += damage.attack, 0);
};

function getValuestCountToSumValues(numbers, sum) {
    let count = 0;
    numbers.reduce(function(a, num, i){
        if (a < sum ){
            count = i + 1;
            return a += num;
        };
    } );
    return count;
};

// Задача 2:

function sleep(milliseconds) 
{
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
};

function sum(...args) {    
    sleep(100); 
    return args.reduce((sum, arg) => {
      return sum += +arg;
    }, 0);
  };

  function compareArrays( arr1, arr2 ) {
      return arr1.every((x, i) => x === arr2[i]) && arr1.length === arr2.length;
  };

  function memorize(fn, limit) {
      const memory = [];
      return function (...args){
        const findResult = memory.find((i) => compareArrays(i.args, args)); 
        if (findResult) {
            return findResult.result;
        }; 
        const result = fn(...args);
        if (memory.length === limit){
        memory.unshift();
        }             
        memory.push({args, result});
        return result;
              
      };
  };


  // Необязательная честь:
  function testCase(testFunction, timer){
    const arr = [
        [1,2,3], 
        [1,2,3,4], 
        [1,2,3,4,5], 
        [1,2,3,2,1], 
        [3,2,1,2,3], 
        [1,2,3], 
        [1,2,3,2,1], 
        [1,2,3,4] 
      ];
    console.time(timer);
    for (let i = 0; i < 100; i++){
        arr.forEach((a) => testFunction(...a));
    };
    console.timeEnd(timer);
  };
// Проверки 
//   const mSum = memorize(sum, 5);

//   function altSum(...args) {     
//     return args.reduce((sum, arg) => {
//       return sum += +arg;
//     }, 0);
//   };

//   const mAltSum = memorize(altSum, 5);

//   console.log(testCase(sum, 'Время sum'));
//  sum: 80801.155... ms - очень долго;


//   console.log(testCase(mSum, 'Время mSum'));
//  mSum: 202.236... ms - оптимизация помогла ускорить выполнение функции;

//   console.log(testCase(altSum, 'Время altSum'));
//  altSum: 0.376... ms - без задержки функция выполняется быстро;

//   console.log(testCase(mAltSum, 'Время mAltSum'));
//  mAltSum: 0.444... ms - в данном случае оптимизация только увеличила 
//  количество выполняемого кода и соответственно время;