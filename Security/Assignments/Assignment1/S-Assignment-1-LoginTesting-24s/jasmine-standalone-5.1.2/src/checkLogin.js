//checkLogin function
/** Validates that the encrypted username and password inputted by the user matches 
 * the expected encrypted username and password and either returns true or returns 
 * a string containing an error message
* @param {string} usernameInput
* @param {string} passwordInput
* @return {boolean} 
* @return {string}
*/

//Hard coding my valid username and password
var username = md5Encrypt("DerynBoscariol");
var password = md5Encrypt("myP@ssword123");
//function recieves user inputted username and passowrd
function checkLogin(usernameInput, passwordInput) {
    //if the inputted username(encrypted) is the same as my valid username(encrypted) 
    //and the inputted password(encrypted) is the same as my valid password(encrypted) then return true
if (md5Encrypt(usernameInput) === username && md5Encrypt(passwordInput) === password){
    return true;
    //if the inputted username is an empty string or null return "No username entered"
} else if (usernameInput === "" || usernameInput === null){
    return "No username entered.";
    //if the inputted password is an empty string or null return "No password entered."
} else if (passwordInput === "" || passwordInput === null){
    return "No password entered."
    //for any other inputs return "Invalid Username or Password."
} else {
    return "Invalid Username or Password.";
}
}