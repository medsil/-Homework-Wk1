// Write your JS here
let hero = {
    name: "",
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type : "",
        damage : 2,
    }
}
function rest(object){
    object.health = 10;
    return object;
}

hero.health = 10

document.getElementById("inn").addEventListener("click", function () {
    hero.health = 10;
});

//  new variables 
const testWeapon = {type : 'dagger', damage : 2}
const testHero = {inventory: [undefined,]}

// adjustments to function 
function pickUpItem(testHero, testWeapon){
    testHero.inventory.push(testWeapon)
}

const weaponTest = { type: 'dagger', damage: 2 }
document.getElementById("dagger").addEventListener("click", function () {
    pickUpItem(hero, testWeapon)
});

function equipWeapon () {
}