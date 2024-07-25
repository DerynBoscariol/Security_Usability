describe("Test guessNum Function", function () {
    //Test to pass
    describe("guessNum Test To Pass", function (){
        it("should return ‘You guessed it!’ when the correct number is entered. Test Value = 4", function () {
            let testValue = 4;
            expect(guessNum(testValue)).toEqual('You guessed it!');
        });
        it("should return ‘Guess again.’ for any number between 1 and 10 (inclusive) that is not the correct answer. Test Value = 5", function (){
            let testValue = 5;
            expect(guessNum(testValue)).toEqual('Guess again.');
        });
    });//END TEST TO PASS
    //Test to fail
    describe("guessNum Test To Fail", function (){
        it("should return ‘A number was not input.’ if the value entered is not a number. Test Value = h", function () {
            let testValue = "h";
            expect(guessNum(testValue)).toEqual('A number was not input.');
        });
        it("should return ‘A number was not input.’ if the value entered is not a number. Test Value = ?", function () {
            let testValue = "?";
            expect(guessNum(testValue)).toEqual('A number was not input.');
        });
        it("should return ‘A number was not input.’ if the value entered is not a number. Test Value = undefined", function () {
            let testValue = undefined;
            expect(guessNum(testValue)).toEqual('A number was not input.');
        });
        it(" should return ‘A value was not entered.’ if it receives an empty string. Test Value = ''", function () {
            let testValue = "";
            expect(guessNum(testValue)).toEqual('A value was not entered.');
        });
    }); //END TEST TO FAIL
    //Boundary tests
    describe("guessNum Boundary Tests", function () {
        it("should return ‘Way off!!!! Pick between 1 and 10.’ if the value entered is a number outside of the allowed range of guessing values. Test Value = 0", function () {
            let testValue = 0;
            expect(guessNum(testValue)).toEqual('Way off!!!! Pick between 1 and 10.');
        });
        it("should return ‘Guess again.’ for any number between 1 and 10 (inclusive) that is not the correct answer. Test Value = 1", function () {
            let testValue = 1;
            expect(guessNum(testValue)).toEqual('Guess again.');
        });
        it("should return ‘Guess again.’ for any number between 1 and 10 (inclusive) that is not the correct answer. Test Value = 2", function () {
            let testValue = 2;
            expect(guessNum(testValue)).toEqual('Guess again.');
        });
        it("should return ‘Guess again.’ for any number between 1 and 10 (inclusive) that is not the correct answer. Test Value = 9", function () {
            let testValue = 9;
            expect(guessNum(testValue)).toEqual('Guess again.');
        });
        it("should return ‘Guess again.’ for any number between 1 and 10 (inclusive) that is not the correct answer. Test Value = 10", function () {
            let testValue = 10;
            expect(guessNum(testValue)).toEqual('Guess again.');
        });
        it("should return ‘Way off!!!! Pick between 1 and 10.’ if the value entered is a number outside of the allowed range of guessing values. Test Value = 11", function () {
            let testValue = 11;
            expect(guessNum(testValue)).toEqual('Way off!!!! Pick between 1 and 10.');
        });
    }); //END OF BOUNDARY TESTS

}); //END MAIN SUITE