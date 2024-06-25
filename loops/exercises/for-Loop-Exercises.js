//Exercise #1: Construct for loops that accomplish the following tasks:
   // a. Print the numbers 0 - 20, one number per line.
for (let i = 0; i< 21; i++){
  console.log(i);
}

  //  b. Print only the ODD values from 3 - 29, one number per line.
  for (let j=3; j<30; j+=2){
    console.log(j);
  }
   // c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
   for (let k=12; k>-15; k-=2){
    console.log(k);
   }
   // d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). 
   for(let l= 50; l>19; l--){
    if(l%3 ===0 ){
      console.log(l);
    }
   }



//Exercise #2: 
//Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].
let str = 'LaunchCode';
let arr = [1, 5, 'LC101', 'blue', 42];

//Construct ``for`` loops to accomplish the following tasks:
 // a. Print each element of the array to a new line.
 for (let t = 0; t < arr.length ; t++){
 console.log(arr[t]);
 }
 // b. Print each character of the string - in reverse order - to a new line. */ 
let revStr ='';
 for (let a = 0; a< str.length; a++){
revStr =  str[a] + revStr;
}
console.log(revStr);




//Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
let array =  [2, 3, 13, 18, -5, 38, -10, 11, 0, 104]
// a. One array contains the even numbers, and the other holds the odds.
let even= [];
let odd =[];
for (e =0; e < array.length; e++){
  if(array[e]%2===0){
    even.push(array[e]);
  }
  else {
    odd.push(array[e]);
  }
}
console.log(even);
console.log(odd);
  //b. Print the arrays to confirm the results. 
