//LAB 3 - UNIT TESTING
//======== THIS FILE IS FOR THE UNIT TEST & TEST EXECUTION ==========
function test__checkHumberId(testValue, expectedResult){
    let result = checkHumberId(testValue);
    if (result === expectedResult){
        var passFail = "<span class=green> ==PASSED== </span>";
        //document.getElementsByClassName("green")[0].style.color = "green";
    } else {
        var passFail = "<span class=red> xxFAILEDxx </span>";
        //document.getElementsByClassName("red")[0].style.color = "red";
    }

    let msg = "Value tested: " + testValue + " Expected Result: " + expectedResult + " " + passFail + "<br>";

    let msgOutput = document.getElementById("data");
    msgOutput.innerHTML += msg;
}


test__checkHumberId("N1234567", false); //Boundary Testing: below
test__checkHumberId("N12345678", true);// Test to pass
test__checkHumberId("n12345678", true); // Test to pass
test__checkHumberId("N123456789", false); // Boundary Testing: above
test__checkHumberId(null, false); //Test to fail
test__checkHumberId(undefined, false);//Test to fail
test__checkHumberId("wgg2781eg", false); //Test to fail
test__checkHumberId("H12345678", false); //Test to fail

