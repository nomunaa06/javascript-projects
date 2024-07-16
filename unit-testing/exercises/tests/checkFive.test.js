const execisesTest = require('../checkFive.js');

describe("if condition checks", function(){
    test("if number less than 5, returns", function(){
        expect(execisesTest(3)).toContain( " is less than 5.");
    });
    test('Descriptive feedback number is less than 5', function(){
        let output = execisesTest(2);
        expect(output).toEqual("2 is less than 5." );
    });

    test ('if number more than 5', function(){
        expect(execisesTest(890)).toBe('890 is greater than 5.');
    });

    test('if number equil to 5', function(){
        expect(execisesTest(5)).toEqual("5 is equal to 5.");
    });
});