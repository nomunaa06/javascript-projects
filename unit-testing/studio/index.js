
let launchcode = {
  organization: "nonprofit",
  executiveDirector: "Jeff",
  percentageCoolEmployees: 100,
  programsOffered:["Web Development", "Data Analysis", "Liftoff"],
  launchOutput: function launchOutput(num){
if (num%2===0 && num%3===0 && num%5===0){
    return 'LaunchCode Rocks!';
}    
else if(num%2===0 && num%3===0){
    return 'LaunchCode!';
}
else if(num%3===0 && num%5 ===0){
    return 'Code Rocks!';
}
else if(num%5===0 && num%2 ===0){
    return 'Launch Rocks! (CRASH!!!!)';
}
else if (num%2===0){
    return 'Launch!';
}
else if (num%3===0){
    return 'Code!';
}
else if (num%5===0){
    return 'Rocks!';
}
else {
    return "Rutabagas! That doesn't work.";
}
}
};
module.exports = launchcode;

// let launchcode = {
//     organization: "nonprofit",
//     executiveDirector: "Jeff",
//     percentageCoolEmployees: 100,
//     programsOffered: ["Web Development", "Data Analysis", "Liftoff"],
//     launchOutput: function (num) {
//       let output = '';
    
//       if (num%2 === 0){
//         output += 'Launch';
//       }
    
//       if (num%3 === 0){
//         output += 'Code';
//       }
    
//       if (num%5 === 0){
//         if (output) {
//           output += ' Rocks';
//         } else {
//           output += 'Rocks';
//         }
//       }
    
//       if (!output){
//         return "Rutabagas! That doesn't work.";
//       } else if (output==='Launch Rocks') {
//         return output + '! (CRASH!!!!)';
//       } else {
//         return output + '!';
//       }
//     }
//   }
  
//   module.exports = launchcode;