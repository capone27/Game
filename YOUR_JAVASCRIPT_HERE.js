const hero = {
   name: "Jorge",
   heroic: true,
   inventory: [],
   health: 10,
   weapon: {
      type: "pistol",
      demage: 2
   }
}

 
function rest(obj) {
   obj.health = 10;
   return obj;
}

const imgInn = document.getElementById('inn');
imgInn.addEventListener('click', function(){
   hero.health = 10;
});

function pickUpItem(heroLike, heroObj) {
   heroLike.inventory.push(heroObj); 
}

const addInventory = hero.inventory.length;
document.getElementById("dagger").addEventListener("click", function() {
    hero.inventory.push({
       type: "dagger", 
       damage: 2
      });
});

function equipWeapon(heroLike) {
   if(heroLike.inventory.length !== 0) {
       heroLike.weapon = heroLike.inventory[0];
   }
}


const imgBag = document.getElementById("bag");
imgBag.addEventListener("click", function() {
    hero.weapon = hero.inventory[0];
});
