function displayStates(tableID)
{
	for(var a = 1; a <= arrayStates; a++)
	{
		/***
			States 
		***/
		var inputState = document.getElementById("State"+a).value;
		console.log(inputState + " -> ");
		for(var b = 1 ; b <= dataKeeper; b++)
		{
			if(document.getElementById("State"+a+"nextInput"+b) == null)
			{ 
				console.log("Skipping -> " + ("State"+a+"nextInput"+b));
			}
			else
			{
				try
				{
					var inputAlpha = document.getElementById("State"+a+"nextInput"+b).value;
					var inputNext = document.getElementById("State"+a+"nextStates"+b).value;
					console.log(inputAlpha + inputNext);
				}
				catch(err)
				{
					console.log(err);
				}
			}
		}
	}
	
	for(var c = 0; c <= arrayFinalState; c++)
	{
		/***
			Final States
		***/
		var inputFinalState = document.getElementById("FinalState"+a).value;
		console.log(inputFinalState + " -> ");
		for(var d = 1 ; d <= dataKeeper; d++)
		{
			if(document.getElementById("FinalState"+a+"nextInput"+d) == null)
			{ 
				console.log("Skipping -> " + ("FinalState"+a+"nextInput"+d));
			}
			else
			{
				try
				{
					var inputFinalAlpha = document.getElementById("FinalState"+a+"finalNextInput"+d).value;
					var inputFinalNext = document.getElementById("FinalState"+a+"finalNextState"+d).value;
					console.log(inputFinalAlpha + inputFinalNext);
				}
				catch(err)
				{
					console.log(err);
				}
			}
		}
	}
	/*
	for(var i = 1 ; i <= arrayNextInput;i++){
		var inputVal = document.getElementById("nextInput"+i).value;
		console.log(inputVal);
	}
	for(var i = 1 ; i <= arrayNextState;i++){
		var inputVal = document.getElementById("nextStates"+i).value;
		console.log(inputVal);
	}
	for(var i = 1 ; i <= arrayFinalNextState;i++){
		var inputVal = document.getElementById("finalNextState"+i).value;
		console.log(inputVal);
	}
	for(var i = 1 ; i <= arrayFinalNextInput;i++){
		var inputVal = document.getElementById("finalNextInput"+i).value;
		console.log(inputVal);
	}
	*/
}

/***
	Start State
	States
***/
dataKeeper = 1;
arrayNextState = 1;
arrayNextInput = 1;
arrayStates = 1;
arrayButton = 1;
arrayContainer = 1;
arrayContainerStates = 1;
/***
	Adding Alphabet and States for the States
	Increment Alphabet based on [arrayNextInput]
***/
function addAlphabet(containerID)
{
	dataKeeper += 1;
	arrayNextInput += 1;
	
	var getAlphabet = document.createElement("INPUT");
	getAlphabet.setAttribute("type", "text");
	getAlphabet.setAttribute("size", "1");
	getAlphabet.setAttribute("id", "State"+arrayStates+"nextInput"+arrayNextInput);
	
	arrayNextState += 1;
	
	var getStates = document.createElement("INPUT");
	getStates.setAttribute("type", "text");
	getStates.setAttribute("size", "1");
	getStates.setAttribute("id", "State"+arrayStates+"nextStates"+arrayNextState);
	
	var nodeName = document.createElement(nodeName);
	nodeName.innerHTML = " | ";
	
	document.getElementById(containerID).appendChild(getAlphabet);
	document.getElementById(containerID).appendChild(getStates);
	document.getElementById(containerID).appendChild(nodeName);
}

/***
	Adding States
	Increment States based on [arrayNextState]
***/
function addState(containID)
{
	arrayNextInput = 0;
	arrayNextState = 0;
	
	arrayStates += 1;
	
	var getStates = document.createElement("INPUT");
	getStates.setAttribute("type", "text");
	getStates.setAttribute("size", "1");
	getStates.setAttribute("id", "State"+arrayStates);
	
	var string = document.createElement(nodeName);
	string.innerHTML = " => ";
	
	arrayNextInput += 1;
	
	var getAlphabet = document.createElement("INPUT");
	getAlphabet.setAttribute("type", "text");
	getAlphabet.setAttribute("size", "1");
	getAlphabet.setAttribute("id", "State"+arrayStates+"nextInput"+arrayNextInput);
	
	var nodeName = document.createElement(nodeName);
	nodeName.innerHTML = " ";
	
	arrayNextState += 1;
	
	var getStates2 = document.createElement("INPUT");
	getStates2.setAttribute("type", "text");
	getStates2.setAttribute("size", "1");
	getStates2.setAttribute("id", "State"+arrayStates+"nextStates"+arrayNextState);
	
	var data = document.createElement(data);
	data.innerHTML = " | ";
	
	arrayContainer += 1;
	
	var newContainers = document.createElement('span');
	newContainers.setAttribute("id", "alphabetContainer"+arrayContainer);
	
	arrayButton += 1;
	
	var dataF = "alphabetContainer"+arrayContainer;
	console.log("dataF -> " + dataF);
	
	var btn = document.createElement("BUTTON");
	btn.innerHTML = "Add Alphabet";
	btn.setAttribute("type", "button");
	btn.setAttribute("id", "button"+arrayButton);
	btn.setAttribute("onclick", "addAlphabet(" + "'" + 'alphabetContainer' + arrayContainer + "'" + ")");
	
	console.log(btn);
	
	var newLines = document.createElement('br');
	
	arrayContainerStates += 1;
	
	var newContainer = document.createElement('span');
	newContainer.setAttribute("id", "stateContainer"+arrayContainerStates);
	
	//document.getElementById('stateContainer').appendChild(newLine);
	document.getElementById(containID).appendChild(getStates);
	document.getElementById(containID).appendChild(string);
	document.getElementById(containID).appendChild(getAlphabet);
	document.getElementById(containID).appendChild(nodeName);
	document.getElementById(containID).appendChild(getStates2);
	document.getElementById(containID).appendChild(data);
	document.getElementById(containID).appendChild(newContainers);
	document.getElementById(containID).appendChild(btn);
	document.getElementById(containID).appendChild(newLines);
	document.getElementById(containID).appendChild(newContainer);
	//document.getElementById('stateContainer').appendChild(" | ");
}

dataFinalKeeper = 1;
arrayFinalState = 1;
arrayFinalNextState = 1;
arrayFinalNextInput = 1;

finalArrayButton = 1;
finalArrayContainer = 1;
finalArrayContainerStates = 1;

function addFinalAlphabet(containerID)
{
	dataFinalKeeper += 1;
	arrayFinalNextInput += 1;
	
	var getAlphabet = document.createElement("INPUT");
	getAlphabet.setAttribute("type", "text");
	getAlphabet.setAttribute("size", "1");
	getAlphabet.setAttribute("id", "finalNextInput"+arrayFinalNextInput);
	
	arrayFinalNextState += 1;
	
	var getStates = document.createElement("INPUT");
	getStates.setAttribute("type", "text");
	getStates.setAttribute("size", "1");
	getStates.setAttribute("id", "finalNextState"+arrayFinalNextState);
	
	var nodeName = document.createElement(nodeName);
	nodeName.innerHTML = " | ";
	
	document.getElementById(containerID).appendChild(getAlphabet);
	document.getElementById(containerID).appendChild(getStates);
	document.getElementById(containerID).appendChild(nodeName);
	
}

function addFinalState(containID)
{
	arrayFinalNextInput = 0;
	arrayFinalNextState = 0;
	
	arrayFinalState += 1;
	
	var getStates = document.createElement("INPUT");
	getStates.setAttribute("type", "text");
	getStates.setAttribute("size", "1");
	getStates.setAttribute("id", "FinalState"+arrayFinalState);
	
	var string = document.createElement(nodeName);
	string.innerHTML = " => ";
	
	arrayFinalNextInput += 1;
	
	var getAlphabet = document.createElement("INPUT");
	getAlphabet.setAttribute("type", "text");
	getAlphabet.setAttribute("size", "1");
	getAlphabet.setAttribute("id", "finalNextInput"+arrayFinalNextInput);
	
	var nodeName = document.createElement(nodeName);
	nodeName.innerHTML = " ";
	
	arrayFinalNextState += 1;
	
	var getStates2 = document.createElement("INPUT");
	getStates2.setAttribute("type", "text");
	getStates2.setAttribute("size", "1");
	getStates2.setAttribute("id", "finalNextState"+arrayFinalNextState);
	
	var data = document.createElement(data);
	data.innerHTML = " | ";
	
	finalArrayContainer += 1;
	
	var newContainers = document.createElement('span');
	newContainers.setAttribute("id", "finalContainer"+finalArrayContainer);
	
	finalArrayButton += 1;
	
	var dataF = "finalContainer"+finalArrayContainer;
	console.log("dataF -> " + dataF);
	
	var btn = document.createElement("BUTTON");
	btn.innerHTML = "Add Final Alphabet";
	btn.setAttribute("type", "button");
	btn.setAttribute("id", "finalbutton"+finalArrayButton);
	btn.setAttribute("onclick", "addAlphabet(" + "'" + 'finalContainer' + finalArrayContainer + "'" + ")");
	
	console.log(btn);
	
	var newLines = document.createElement('br');
	
	finalArrayContainerStates += 1;
	
	var newContainer = document.createElement('span');
	newContainer.setAttribute("id", "finalstateContainer"+finalArrayContainerStates);
	
	//document.getElementById('stateContainer').appendChild(newLine);
	document.getElementById(containID).appendChild(getStates);
	document.getElementById(containID).appendChild(string);
	document.getElementById(containID).appendChild(getAlphabet);
	document.getElementById(containID).appendChild(nodeName);
	document.getElementById(containID).appendChild(getStates2);
	document.getElementById(containID).appendChild(data);
	document.getElementById(containID).appendChild(newContainers);
	document.getElementById(containID).appendChild(btn);
	document.getElementById(containID).appendChild(newLines);
	document.getElementById(containID).appendChild(newContainer);
	//document.getElementById('stateContainer').appendChild(" | ");
}


bigAlphabets = 1;
smallAlphabets = 2;
stateData = [];
alphabetData = [];
function appendRow() 
{
    var tbl = document.getElementById('rgTable'), // table reference
        row = tbl.insertRow(tbl.rows.length),      // append table row
        i;
		
    // insert table cells to the new row
    for (i = 0; i < tbl.rows[0].cells.length; i++) {
        var td = document.createElement('td');
		td = row.insertCell(i);
		if(i == 0)
		{
			td.innerHTML = "State "+ String.fromCharCode(65 + bigAlphabets); ;
		}
		else
		{
			var ele = document.createElement('input');
			ele.setAttribute('type', 'text');
			ele.setAttribute('value', '');
			td.appendChild(ele);
		}
		stateData.push(ele);
		//
    }
    bigAlphabets++;
}

// append column to the HTML table
function appendColumn() 
{
    var tbl = document.getElementById('rgTable'), // table reference
        i;
    // open loop for each row and append cell
    for (i = 0; i <= tbl.rows.length; i++)
	{
		var td = document.createElement('td');
		td = tbl.rows[i].insertCell(tbl.rows[i].cells.length);
		if(i == 0)
		{
			td.innerHTML =  "State "+ value;
			value++;
			td.innerHTML =  String.fromCharCode(97 + smallAlphabets);
			smallAlphabets++;
		}
		else
		{
			var ele = document.createElement('input');
			ele.setAttribute('type', 'text');
			ele.setAttribute('value', '');
			td.appendChild(ele);
		}
		alphabetData.push(ele);
        //
    }
}