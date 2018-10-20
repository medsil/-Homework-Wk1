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

// function equipWeapon () {
// }

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


// adjustments to function new variable declared
const testHero2 = { weapon: { type: 'sword', damage: 5 }, inventory: [ { type: 'dagger', damage: 2 } ] }
const testWeapon2 = testHero2.weapon
const inventoryWeapon = testHero2.inventory[0]

//equipWeapon(testHero)

function equipWeapon(){
        
}
