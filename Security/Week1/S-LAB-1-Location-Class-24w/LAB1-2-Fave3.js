/*LAB 1-2: JAVASCRIPT CLASSES*/
var formHandle = document.forms.fave_form;
var favOutput = document.getElementById("faveList");
var outputBlock = document.getElementById("faveBlock");
var faveThree = [];
//FAVE FRIEND CLASS
class FavFriend {
	constructor(friendName, friendNumber){
		this.name = friendName;
		this.number = friendNumber;
	}
}
window.onload = function(){

formHandle.onsubmit = function (){
var friend1 = new FavFriend(formHandle.name1.value, formHandle.phone1.value);
//console.log(friend1);
var friend2 = new FavFriend(formHandle.name2.value, formHandle.phone2.value);
var friend3 = new FavFriend(formHandle.name3.value, formHandle.phone3.value);
faveThree.push(friend1, friend2, friend3);
formHandle.style.display = "none";
outputBlock.style.display = "block";

	//var faveThree = [friend1, friend2, friend3 ];//FAVE 3 ARRAY
	favOutput.innerHTML += "<ol>"

	for(let i = 0; i<faveThree.length; i++){
		favOutput.innerHTML += "<li>" + faveThree[i].name + "</li>";
	}

return false;
}

}//END OF onload FUNCTION