const rockPaperScissors = require('../RPS.js');
describe("Checking rock paper scissor game", function(){
    test("checking ties", function(){
        expect(rockPaperScissors('rock','rock')).toEqual('TIE!');
    });
    test("checking if Playler1 wins", function(){
        expect(rockPaperScissors("scissors","paper")).toEqual('Player 1 wins!');
    });

    test("checking if Playler2 wins", function(){
        expect(rockPaperScissors("scissors","rock")).toEqual('Player 2 wins!');
    });

    test("checking if players didn't enter rock paper scissors", function(){
        expect(rockPaperScissors("hkhkh", 'jaja')).toEqual("invalid");
    });
});