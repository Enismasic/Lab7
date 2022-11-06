function init(){
//add your javascrip between these two lines of code
 function nameAlert(){
	 var input = document.getElementById('entryinput').value;
	 alert("Enis Masic:" + input);
	 
	 var output = document.getElementById('textoutput');
	 output.innerHTML = userInput;
 }
 
 var alertButton = document.getElementById('entrybutton');
 alertButton.addEventListener('click', nameAlert);
}
window.addEventListener('load', init);