
document.addEventListener('DOMContentLoaded', function() {

	const parseButton = document.getElementById('button_parse');
	parseButton.classList.add('button');
	const settingsButton = document.getElementById('settingsIcon');
	settingsButton.classList.add("button");
	const helpButton = document.getElementById('button_help');
	helpButton.classList.add("button");
	var plainButton = document.createElement("BUTTON");
	const line = document.createElement("HR");


	parseButton.addEventListener('click', parse);
	settingsButton.addEventListener('click', onSettingsClicked);
	helpButton.addEventListener('click', onHelpClicked);
	
	plainButton.addEventListener('click', onPlainTextClicked); 

	// Function that opens a new chrome tab for the readme.html to display to the user
	function onHelpClicked (){
		console.log('help button worked');
		const help_url = "/readme.html";
		chrome.tabs.create({url: help_url});
	}

	// creating a function for plain text to open in new window 
	function onPlainTextClicked(){
		console.log('plainText worked');
		const plaintext_url = "/readmePlainText.html";
		chrome.tabs.create({url:plaintext.url});
	}
	
	// Function that adds settings to the settings button. When clicked the window is expanded to display the options
	// to users.
	function onSettingsClicked(){
		console.log('settings button worked');
		plainButton.innerText = "Convert to Plain Text";
		plainButton.classList.add("settingButton");
		document.body.appendChild(line);
		document.body.appendChild(plainButton);
		settingsButton.removeEventListener('click', onSettingsClicked);
		settingsButton.addEventListener('click', removeSettings)

	}

	function removeSettings(){

		document.body.removeChild(plainButton);
		document.body.removeChild(line);
		settingsButton.removeEventListener('click', removeSettings);
		settingsButton.addEventListener('click', onSettingsClicked);
	}

	//Reverts the color scheme of the window to indicate that a parse is active
	function toggleBack(){
		chrome.tabs.executeScript({file: 'jquery-3.4.0.slim.js'});
		chrome.tabs.executeScript({file: 'parse.js'});

		document.getElementById('parsely').style.color = '#73a753';
		document.body.style.backgroundColor = '#ffffff';
		parseButton.removeEventListener('click', toggleBack);
		parseButton.addEventListener('click', parse);
		plainButton.removeEventListener('click', toggleBack);
		plainButton.addEventListener('click', parse);
	}

	//Function that enables the user to parse the content of applicable web addresses
	function parse(){
		chrome.tabs.executeScript({file: 'jquery-3.4.0.slim.js'});
		chrome.tabs.executeScript({file: 'parse.js'});
		document.getElementById('parsely').style.color = '#282b26';
		document.body.style.backgroundColor = '#73a753';
		parseButton.removeEventListener('click', parse);
		parseButton.addEventListener('click', toggleBack);
	}
		function plainText(){
		chrome.tabs.executeScript({file: 'jquery-3.4.0.slim.js'});
		chrome.tabs.executeScript({file: 'plaintext.js'});
		document.getElementById('parsely').style.color = '#282b26';
		document.body.style.backgroundColor = '#73a753';
		plainButton.removeEventListener('click', plaintext);
		plainButton.addEventListener('click', toggleBack);
	}
 });

