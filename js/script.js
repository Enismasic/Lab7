function init(){
//add your javascrip between these two lines of code
 function nameAlert(){
	 var input = document.getElementById('entryinput').value;
	 alert("Enis Masic:" + input);//obtain the input 
	 
	 var output = document.getElementById('textoutput');
	 output.innerHTML = input;//obtain the output from input
 }
 
 var alertButton = document.getElementById('entrybutton');
 alertButton.addEventListener('click', nameAlert); //button function
}
window.addEventListener('load', init);