// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){
  // Write your unit tests here!
test("Organization has 'nonprofit'" , function(){
  expect(launchcode.organization).toEqual("nonprofit");
});
test("Executive director is Jeff", function(){
  expect(launchcode.executiveDirector).toEqual("Jeff");
});
test("pecrcentage of cool employee is number", function(){
  expect(typeof launchcode.percentageCoolEmployees).toEqual("number");
});  

test("programms offered has Web Development,Data Analysis, Liftoff values", function(){
  expect(launchcode.programsOffered).toContain("Web Development");
  expect(launchcode.programsOffered).toContain("Data Analysis");
  expect(launchcode.programsOffered).toContain("Liftoff");
  expect(launchcode.programsOffered.length).toEqual(3);
});  
test("Divisible by 2 returns 'Launch!'", function(){
  expect(launchcode.launchOutput(2)).toBe('Launch!');
});  
test("Divisible by 3 returns 'Code!'", function(){
  expect(launchcode.launchOutput(3)).toBe('Code!');
});  
test("Divisible by 5 returns 'Rocks!'", function(){
  expect(launchcode.launchOutput(5)).toBe('Rocks!');
});  
test("Divisible by 2 and 3 returns 'LaunchCode!'", function(){
  expect(launchcode.launchOutput(6)).toBe('LaunchCode!');
});  
test("Divisible by 5 and 3 returns 'Code Rocks!'", function(){
  expect(launchcode.launchOutput(15)).toBe('Code Rocks!');
}); 
test("Divisible by 5 and 2 returns 'Launch Rocks! (CRASH!!!!)'", function(){
  expect(launchcode.launchOutput(10)).toBe('Launch Rocks! (CRASH!!!!)');
}); 
test("Divisible by 5, 3 and 2 returns 'LaunchCode Rocks!'", function(){
  expect(launchcode.launchOutput(30)).toBe('LaunchCode Rocks!');
});
test("Not Divisible by 5, 3 and 2 returns 'Rutabagas! That doesn't work.'", function(){
  expect(launchcode.launchOutput(31)).toBe("Rutabagas! That doesn't work.");
});
});