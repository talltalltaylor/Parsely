var parseButton = document.getElementById('button_parse');
var settingsButton = document.getElementById('button_settings');
var helpButton = document.getElementById('button_help');
var settingsButton = document.getElementById('button_settings');
var colorButton = document.createElement("BUTTON");
var fontButton = document.createElement("BUTTON");
var plainButton = document.createElement("BUTTON");
var line = document.createElement("HR");

document.addEventListener("DOMContentLoaded", function(event) {
	settingsButton.addEventListener('click', onSettingsClicked);
	helpButton.addEventListener('click', onHelpClicked);
});

function onHelpClicked (){
  console.log('help button worked');
  var help_url = "/readme.html";
  chrome.tabs.create({url: help_url});
}

function onSettingsClicked(){
	console.log('settings button worked');
	colorButton.innerText = "Change Color";
	fontButton.innerText = "Change Font";
	plainButton.innerText = "Plain Text Mode";
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
	settingsButton.removeEventListener('click', removeSettings);
	settingsButton.addEventListener('click', onSettingsClicked);
}
//need to add any popup functionality here
//can take JS out of html and put it in here
