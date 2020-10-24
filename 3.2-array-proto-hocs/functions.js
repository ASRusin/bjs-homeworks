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
      return arr1.every((x, i) => x === arr2[i]);
  };

  function memorize(fn, limit) {
      const memory = [];
      return function (...args){
        const findResult = memory.find((i) => compareArrays(i.args, args)); 
        if (findResult) {
            return findResult.result;
        } else {
            const result = fn(...args);
            if (memory.length === limit){
                memory.unshift(0);
            }             
            memory.push({args: args, result: result});
            return result;
        };      
      };
  };