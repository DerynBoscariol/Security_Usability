describe("Test md5Encrypt", function () {
    //Test to pass
    describe("md5Encrypt Test To Pass", function (){
        it("should return a string of the hashed value (as 32 hexadecimal characters)", function () {
            let testValue = "myP@ssword123";
            expect(md5Encrypt(testValue)).toMatch(/^[0-9]|[A-F]{32}$/i);
        });
    });//END TEST TO PASS
}); //END MAIN SUITE



describe("Test checkLogin", function () {
    //Test to pass
    describe("checkLogin Test To Pass", function (){
        it("should return the Boolean true if the username and the password match a known username and matching password", function () {
            let testUser = "DerynBoscariol";
            let testPass = "myP@ssword123";
            expect(checkLogin(testUser, testPass)).toEqual(true);
        });
    });//END TEST TO PASS
  
    //Test to fail
    describe("checkLogin Test To Fail", function (){
        it("function should return ‘Invalid Username or Password.’ if the username input does not match a known username", function (){
            let testUser = "AppleJack";
            let testPass = "h8123he28";
            expect(checkLogin(testUser, testPass)).toEqual("Invalid Username or Password.");
        });
        it("function should return ‘Invalid Username or Password.’ if the username input does not match a known username", function (){
            let testUser = "DerynBoscariol";
            let testPass = "h8123he28";
            expect(checkLogin(testUser, testPass)).toEqual("Invalid Username or Password.");
        });
        it("function should return ‘Invalid Username or Password.’ if the username input does not match a known username", function (){
            let testUser = "AppleJack";
            let testPass = "myP@ssword123";
            expect(checkLogin(testUser, testPass)).toEqual("Invalid Username or Password.");
        });
        it("should return ‘No username entered.’ if the username is an empty string", function () {
            let testUser = "";
            let testPass = "myP@ssword123";
            expect(checkLogin(testUser, testPass)).toEqual("No username entered.");
        });
        it("should return ‘No password entered.’ if the password is an empty string", function () {
            let testUser = "DerynBoscariol";
            let testPass = "";
            expect(checkLogin(testUser, testPass)).toEqual("No password entered.");
        });
        ///ADD NULL OR UNDEFINED
    }); //END TEST TO FAIL
}); //END MAIN SUITE