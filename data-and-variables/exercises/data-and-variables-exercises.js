// Declare and assign the variables below
let spaceShuttleName = "Determination";
let shuttleSpeed_MPH = 17500;
let distanceToMars_KM = 225000000;
let distanceToMoon_KM = 384400;
const miles_per_km = 0.621;
// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof spaceShuttleName)
console.log(typeof shuttleSpeed_MPH)
console.log(typeof distanceToMars_KM)
console.log(typeof distanceToMoon_KM)
console.log(typeof miles_per_km)
// Calculate a space mission below
let distanceToMars_MILE = distanceToMars_KM * miles_per_km;
let hoursToMars = distanceToMars_MILE / shuttleSpeed_MPH;
let daysToMars = hoursToMars / 24;
// Print the results of the space mission calculations below
console.log(spaceShuttleName,'will take',daysToMars,'days to reach Mars.' );
// Calculate a trip to the moon below
let distanceToMoon_MILE = distanceToMoon_KM * miles_per_km;
let hoursToMoon = distanceToMoon_MILE / shuttleSpeed_MPH;
let daysToMoon = hoursToMoon / 24;
// Print the results of the trip to the moon below
console.log(spaceShuttleName,'will take',daysToMoon,'days to reach Moon.' );