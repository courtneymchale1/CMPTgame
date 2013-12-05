function changePage(curr, next) {
      var next, currPage, nextPage;
      currPage = document.getElementById('page' + curr);
      nextPage = document.getElementById('page' + next);
      
      currPage.style.display = 'none';
      nextPage.style.display = 'block';
}
function start() {
    document.getElementById('page0').style.display = 'block';
}
function lookInLibrary(){
	var	userName=document.getElementById('nameBox').value;
	return alert('CONGRATULATIONS...looks like you came up short. Nothing to see here. ' + userName +
	'You need to look elsewhere')
}
function begin(){
	var	userName=document.getElementById('nameBox').value;	
	return alert('And so it begins ' + userName +
	'... The room begins to fill with poison and you feel as though it is harder to breath. A thousand questions runs through your mind. What if you die? What should I do next? Where should I go? Well, '
	+ userName + ' you tell us where would you like to go?')
}
function randomRoom() {
	//var arr=('div[id^="page5","page6","page7"]');
	//Given: list of rooms
	//return: random one of food court, atrium, or dinosaur exhibit
		//seed getSeconds();
} 
function keyFound(){
	var	userName=document.getElementById('nameBox').value;
	return alert('Looks like you found a key...but it is not the magic key')
}
var rooms= new Array();
	rooms[1]= "div id='page5'";
	rooms[2]= "div id='page6'";
	rooms[3]= "div id='page7'";
user=new Object();
	user.name=document.getElementById('nameBox').value;

