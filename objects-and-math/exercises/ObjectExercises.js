let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5
};

let superChimptwo ={
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6
};

let beagleOne ={
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5
};   
let trandigradeOne = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1  
};

// After you have created the other object literals, add the astronautID property to each one.
superChimpOne["astronautID"] = 1;
salamander["astronautID"] = 2;
superChimptwo['astronautID'] = 3;
beagleOne['astronautID']=4;
trandigradeOne['astronautID'] = 5;

// Add a move method to each animal object
superChimpOne['move'] = function() {
   return Math.floor(Math.random()*11);
}
console.log(superChimpOne);
// Create an array to hold the animal objects.
let newArray = [superChimpOne, salamander, superChimptwo, beagleOne, trandigradeOne];
// Print out the relevant information about each animal.

// Start an animal race!
