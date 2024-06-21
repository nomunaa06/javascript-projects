let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";
const input = require('readline-sync');

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
foodCabinet = food.split(',');
equipmentCabinet = equipment.split(',');
petsCabinet = pets.split(',');
sleepAidsCabinet = sleepAids.split(',');

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
cargoHold = [];
cargoHold.push(foodCabinet);
cargoHold.push(equipmentCabinet);
cargoHold.push(petsCabinet);
cargoHold.push(sleepAidsCabinet);
console.log(cargoHold);
//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
let cabinetNumber=Number(input.question("Enter the cabinet number between 0 to 3: "));
//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.

if(cabinetNumber > 3 || cabinetNumber < 0){
    console.log("Error! Invalid Number")
}
else {
    console.log(cargoHold[cabinetNumber]);
}

//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
let checkItem = input.question(" Enter your checking item: ");
if(cargoHold[0].includes(checkItem)){
    console.log(`Cabinet food DOES contain ${checkItem}.`);
}
else if (cargoHold[1].includes(checkItem)){
    console.log(`Cabinet equipment DOES contain ${checkItem}.`);
}
else if (cargoHold[2].includes(checkItem)){
    console.log(`Cabinet pets DOES contain ${checkItem}.`);
}
else if (cargoHold[3].includes(checkItem)){
    console.log(`Cabinet sleep aid DOES contain ${checkItem}.`)
}
else{
    console.log(`Cabinet DOES NOT contain ${checkItem}.`)
}