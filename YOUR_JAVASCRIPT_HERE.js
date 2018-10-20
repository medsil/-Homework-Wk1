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
function pickUpItem(){
}
function equipWeapon () {
}
hero.health = 10

document.getElementById("inn").addEventListener("click", function () {
    hero.health = 10;
});
  