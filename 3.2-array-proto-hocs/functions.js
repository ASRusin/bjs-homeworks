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

