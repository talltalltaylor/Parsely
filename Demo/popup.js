document.addEventListener('DOMContentLoaded', function() {

	var parseButton = document.getElementById('button_parse');
	parseButton.classList.add('button');
	var settingsButton = document.getElementById('settingsIcon');
	settingsButton.classList.add("button");
	var helpButton = document.getElementById('button_help');
	helpButton.classList.add("button");
	var colorButton = document.createElement("BUTTON");
	var fontButton = document.createElement("BUTTON");
	var plainButton = document.createElement("BUTTON");
	var line = document.createElement("HR");

	parseButton.addEventListener('click', parse);
	settingsButton.addEventListener('click', onSettingsClicked);
	helpButton.addEventListener('click', onHelpClicked);
	plainButton.addEventListener('click', plainText); 
	

	function onHelpClicked (){

		console.log('help button worked');
		var help_url = "/readme.html";
		chrome.tabs.create({url: help_url});
	}


	function onSettingsClicked(){

		console.log('settings button worked');
		colorButton.innerText = "Change Color";
		colorButton.classList.add("button");
		fontButton.innerText = "Change Font";
		fontButton.classList.add("button");
		plainButton.innerText = "Plain Text Mode";
		plainButton.classList.add("button");
		document.body.appendChild(line);
		document.body.appendChild(colorButton);
		document.body.appendChild(fontButton);
		document.body.appendChild(plainButton);
		settingsButton.removeEventListener('click', onSettingsClicked);
		settingsButton.addEventListener('click', removeSettings);
	}



	function removeSettings(){

		document.body.removeChild(colorButton);
		document.body.removeChild(fontButton);
		document.body.removeChild(plainButton);
		document.body.removeChild(line);
		settingsButton.removeEventListener('click', removeSettings);
		settingsButton.addEventListener('click', onSettingsClicked);
	}



	function toggleBack(){

		chrome.tabs.executeScript({file: 'jquery-3.4.0.slim.js'});
		chrome.tabs.executeScript({file: 'parse.js'});
		document.getElementById('parsely').style.color = '#73a753';
		document.body.style.backgroundColor = 'white';
		parseButton.removeEventListener('click', toggleBack);
		plainButton.removeEventListener('click', toggleBack);
		parseButton.addEventListener('click', parse);
		plainButton.addEventListener('click', plainText);
	}



	function parse(){

		chrome.tabs.executeScript({file: 'jquery-3.4.0.slim.js'});
		chrome.tabs.executeScript({file: 'parse.js'});
		document.getElementById('parsely').style.color = 'black';
		document.body.style.backgroundColor = '#73a753';
		parseButton.removeEventListener('click', parse);
		parseButton.addEventListener('click', toggleBack);
	}
	
	function plainText(){
		chrome.tabs.executeScript({file: 'jquery-3.4.0.slim.js'});
		chrome.tabs.executeScript({file: 'plaintext.js'});
		document.getElementById('parsely').style.color = 'black';
		document.body.style.backgroundColor = '#73a753';
		plainButton.removeEventListener('click', plainText);
		plainButton.addEventListener('click', toggleBack);
	}
  
 });
