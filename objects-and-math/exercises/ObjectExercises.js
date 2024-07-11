let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   move: function() {
      return Math.floor(Math.random()*11);
   }
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   move: function() {
      return Math.floor(Math.random()*11);
   }
};

let superChimptwo ={
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   move: function() {
      return Math.floor(Math.random()*11);
   }
};

let beagleOne ={
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   move: function() {
      return Math.floor(Math.random()*11);
   }
};   
let trandigradeOne = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   move: function() {
      return Math.floor(Math.random()*11);
   }
};

// After you have created the other object literals, add the astronautID property to each one.
superChimpOne["astronautID"] = 1;
salamander["astronautID"] = 2;
superChimptwo['astronautID'] = 3;
beagleOne['astronautID']=4;
trandigradeOne['astronautID'] = 5;

// Add a move method to each animal object

// Create an array to hold the animal objects.
let crew = [superChimpOne, salamander, superChimptwo, beagleOne, trandigradeOne];

// Print out the relevant information about each animal.

function crewReports(arr){
   let report =[];
for(let i=0; i<arr.length; i++){
   report.push(`${arr[i].name} is a ${arr[i].species}. They are ${arr[i].age} years old and ${arr[i].mass} kilograms. Their ID is ${arr[i].astronautID}.`);
}
return report; 
}
console.log(crewReports(crew));

// Start an animal race!

function fitnessTest(candidates){
   let results = [], numSteps, turns;

   for (let i = 0; i < candidates.length; i++){
       numSteps = 0;
       turns = 0;

    while(numSteps < 20){
       numSteps += candidates[i].move();
       turns++;
    }

    results.push(`${candidates[i].name} took ${turns} turns to take 20 steps.`);
}

return results;
}
console.log(fitnessTest(crew));
