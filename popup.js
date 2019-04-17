

document.addEventListener("DOMContentLoaded", function(event) {
    var parseButton = document.getElementById('button_parse');
	var settingsButton = document.getElementById('button_settings');
	var helpButton = document.getElementById('button_help');
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
	var settingsButton = document.getElementById('button_settings');
	var colorButton = document.createElement("BUTTON");
	var fontButton = document.createElement("BUTTON");
	var plainButton = document.createElement("BUTTON");
	var line = document.createElement("HR");
	colorButton.innerText = "Change Color";
	fontButton.innerText = "Change Font";
	plainButton.innerText = "Plain Text Mode";
	document.body.appendChild(line);
	document.body.appendChild(colorButton);
	document.body.appendChild(fontButton);
	document.body.appendChild(plainButton);
	
}
//need to add any popup functionality here
//can take JS out of html and put it in here
