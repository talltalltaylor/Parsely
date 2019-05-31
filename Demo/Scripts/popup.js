document.addEventListener('DOMContentLoaded', function() {

	const parseButton = document.getElementById('button_parse');
	parseButton.classList.add("button");
	const helpButton = document.getElementById('button_help');
	helpButton.classList.add("button");
	const line = document.createElement("HR");
	parseButton.addEventListener('click', parse);
	helpButton.addEventListener('click', onHelpClicked);
	var parseFlag = false;

	// Function that opens a new chrome tab for the readme.html to display to the user
	function onHelpClicked (){
		console.log('help button worked');
		const help_url = "/Popup/readme.html";
		chrome.tabs.create({url: help_url});
	}

	//Reverts the color scheme of the window to indicate that a parse is active
	function toggleBack(){
		parseFlag = false;

		if(newTab.checked == false){
			chrome.tabs.executeScript({file: '/Scripts/jquery-3.4.0.slim.js'});
			chrome.tabs.executeScript({file: '/Scripts/parse.js'});
			changeColor(parseFlag);
		}
		else {
			chrome.tabs.executeScript({file: '/Scripts/jquery-3.4.0.slim.js'});
			chrome.tabs.executeScript({file: '/Scripts/parse-tab.js'});
			changeColor(parseFlag);
		}
		
	}

	//Function that enables the user to parse the content of applicable web addresses
	function parse(){
		parseFlag = true;
		if(newTab.checked == false){
			chrome.tabs.executeScript({file: '/Scripts/jquery-3.4.0.slim.js'});
			chrome.tabs.executeScript({file: '/Scripts/parse.js'});
			changeColor(parseFlag);
		}
		else {
			chrome.tabs.executeScript({file: '/Scripts/jquery-3.4.0.slim.js'});
			chrome.tabs.executeScript({file: '/Scripts/parse-tab.js'});
			changeColor(parseFlag);
		}
		
	}

	function changeColor(flag){
		if(flag == true){
			document.getElementById('parsely').style.color = '#282b26';
			document.body.style.backgroundColor = '#73a753';
			parseButton.removeEventListener('click', parse);
			parseButton.addEventListener('click', toggleBack);
		}
		else{
			document.getElementById('parsely').style.color = '#73a753';
			document.body.style.backgroundColor = '#ffffff';
			parseButton.removeEventListener('click', toggleBack);
			parseButton.addEventListener('click', parse);
		}
	}
});

