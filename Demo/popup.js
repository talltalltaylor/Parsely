// Author: Taylor Robbins, April 2019
// Script for the popup in the Parsely Chrome extension

document.addEventListener('DOMContentLoaded', function() {
	
	// get buttons from DOM
	var parseButton = document.getElementById('button_parse');
	parseButton.classList.add('button');
	var settingsButton = document.getElementById('settingsIcon');
	settingsButton.classList.add("button")
	var helpButton = document.getElementById('button_help');
	helpButton.classList.add("button")
	// make buttons
	var colorButton = document.createElement("BUTTON");
	var fontButton = document.createElement("BUTTON");
	var plainButton = document.createElement("BUTTON");
	var line = document.createElement("HR");

	settingsButton.addEventListener('click', onSettingsClicked);
	helpButton.addEventListener('click', onHelpClicked);
	
	function onHelpClicked (){
		console.log('help button worked');
		var help_url = "/readme.html";
		chrome.tabs.create({url: help_url});
	}

	function onSettingsClicked(){
		console.log('settings button worked');
		colorButton.innerText = "Change Color";
		colorButton.classList.add("button")
		fontButton.innerText = "Change Font";
		fontButton.classList.add("button")
		plainButton.innerText = "Plain Text Mode";
		plainButton.classList.add("button")
		document.body.appendChild(line);
		document.body.appendChild(colorButton);
		document.body.appendChild(fontButton);
		document.body.appendChild(plainButton);
		settingsButton.removeEventListener('click', onSettingsClicked);
		settingsButton.addEventListener('click', removeSettings)
	}

	function removeSettings(){
		document.body.removeChild(colorButton)
		document.body.removeChild(fontButton)
		document.body.removeChild(plainButton)
		document.body.removeChild(line);
		settingsButton.removeEventListener('click', removeSettings);
		settingsButton.addEventListener('click', onSettingsClicked);
	}
  
 });
