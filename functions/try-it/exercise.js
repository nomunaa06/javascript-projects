// make line
function makeAline(size){
    let line = '';
    for(let i = 0; i<size; i++){
        line = line + myChar('&');
    }
    return line;
}

console.log(makeAline(5))
// make squire

function makeAsquire(lenght){
let squire = "";

for(let i = 0; i<lenght; i++){
    let row = '';
    for(let j=0; j<lenght; j++){
        row = row + myChar()
    }
   squire = squire + `\n${row}`;

}

 return squire;
}

console.log(makeAsquire(5))

// make a rectangle

function makeRectangle(width, height) {
    let rectangle ='';

    for( let i =0; i<height; i++){
        let recRow ='';
        for (j=0; j<width; j++){
            recRow += myChar();
        }
        rectangle += `\n${recRow}`;
    }

    return rectangle;
}

console.log(makeRectangle(5, 3));

// make downward staircase

function makeDownwardStairs(height){
let staircase = '';
let k = 1;
for (let i=0; i<height; i++){
    staircase = staircase + `\n${makeAline(height).slice(0, k)}`
    k++;
}
return staircase;
}
console.log(makeDownwardStairs(5));

//make space line function

function makeSpaceLine(numSpaces, numChars){
let spaceLine =' '.repeat(numSpaces);
    return spaceLine + makeAline(numChars)+spaceLine ; 
}
console.log( makeSpaceLine(3, 5));

// Make Isosceles Traingle

function makeIsoscelesTriangle(height){
    let isoscelesTriangle ='';
    for(i=0; i<height;i++){
    // isoscelesTriangle += (' '.repeat(height - i - 1)+makeAline(2 * i + 1)+' '.repeat(height - i - 1)+'\n'); 
    isoscelesTriangle+= (makeSpaceLine(height - i - 1, 2 * i + 1 ) +'\n');
    }
    return isoscelesTriangle;
}

console.log(makeIsoscelesTriangle(5));

//make a diamond

function makeDiamond(height){
    let diamond='';
    diamond += (makeIsoscelesTriangle(height));
    diamond = diamond.slice(0,-1) + reverse(diamond);
    return diamond;
    
}

console.log(makeDiamond(5));

function reverse(str) {
    let lettersArray = str.split('');
    let reversedLettersArray = lettersArray.reverse();
    return reversedLettersArray.join('');
 }

 // Bonus mission

 function myChar(char='#'){
   return char;
 }
