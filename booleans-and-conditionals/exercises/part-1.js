// Declare and initialize the variables for exercise 1 here:
let engineIndicatorLight = "red blinking";
let spaceSuitsOn = true;
let shutleCabinReady = true;
let crewStatus = spaceSuitsOn && shutleCabinReady;
let computerStatusCode = 200;
let shuttleSpeed = 15000;
// BEFORE running the code, predict what will be printed to the console by the following statements:
// Answer: it will print: engines are off
if (engineIndicatorLight === "green") {
   console.log("engines have started");
} else if (engineIndicatorLight === "green blinking") {
   console.log("engines are preparing to start");
} else {
   console.log("engines are off");
}
