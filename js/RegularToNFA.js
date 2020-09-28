function displayStates(tableID)
{
	for(var i = 1 ; i <= arraySmallAlpha;i++){
		var inputVal = document.getElementById("smallAlphabet"+i).value;
		console.log(inputVal);
	}
	for(var i = 1 ; i <= arrayBigAlpha;i++){
		var inputVal = document.getElementById("bigAlphabet"+i).value;
		console.log(inputVal);
	}
	for(var i = 1 ; i <= finalArrayBigAlpha;i++){
		var inputVal = document.getElementById("finalbigAlphabet"+i).value;
		console.log(inputVal);
	}
	for(var i = 1 ; i <= finalArraySmallAlpha;i++){
		var inputVal = document.getElementById("finalsmallAlphabet"+i).value;
		console.log(inputVal);
	}

}

/***
	Start State
	States
***/
arrayBigAlpha = 2;
arraySmallAlpha = 1;
arrayButton = 1;
arrayContainer = 1;
arrayContainerStates = 1;
/***
	Adding Alphabet and States for the States
	Increment Alphabet based on [arraySmallAlpha]
***/
function addAlphabet(containerID)
{
	arraySmallAlpha += 1;
	
	var getAlphabet = document.createElement("INPUT");
	getAlphabet.setAttribute("type", "text");
	getAlphabet.setAttribute("size", "1");
	getAlphabet.setAttribute("id", "smallAlphabet"+arraySmallAlpha);
	
	arrayBigAlpha += 1;
	
	var getStates = document.createElement("INPUT");
	getStates.setAttribute("type", "text");
	getStates.setAttribute("size", "1");
	getStates.setAttribute("id", "bigAlphabet"+arrayBigAlpha);
	
	var nodeName = document.createElement(nodeName);
	nodeName.innerHTML = " | ";
	
	document.getElementById(containerID).appendChild(getAlphabet);
	document.getElementById(containerID).appendChild(getStates);
	document.getElementById(containerID).appendChild(nodeName);
	//document.getElementById('alphabetContainer').appendChild(" | ");
	
}

/***
	Adding States
	Increment States based on [arrayBigAlpha]
***/
function addState(containID)
{
	arrayBigAlpha += 1;
	
	//var newLine = document.createElement('tr');
	
	var getStates = document.createElement("INPUT");
	getStates.setAttribute("type", "text");
	getStates.setAttribute("size", "1");
	getStates.setAttribute("id", "bigAlphabet"+arrayBigAlpha);
	
	var string = document.createElement(nodeName);
	string.innerHTML = " => ";
	
	var getAlphabet = document.createElement("INPUT");
	getAlphabet.setAttribute("type", "text");
	getAlphabet.setAttribute("size", "1");
	getAlphabet.setAttribute("id", "smallAlphabet"+arraySmallAlpha);
	
	var nodeName = document.createElement(nodeName);
	nodeName.innerHTML = " ";
	
	arrayBigAlpha += 1;
	
	var getStates2 = document.createElement("INPUT");
	getStates2.setAttribute("type", "text");
	getStates2.setAttribute("size", "1");
	getStates2.setAttribute("id", "bigAlphabet"+arrayBigAlpha);
	
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

finalArrayBigAlpha = 2;
finalArraySmallAlpha = 1;
finalArrayButton = 1;
finalArrayContainer = 1;
finalArrayContainerStates = 1;

function addFinalAlphabet(containerID)
{
	finalArraySmallAlpha += 1;
	
	var getAlphabet = document.createElement("INPUT");
	getAlphabet.setAttribute("type", "text");
	getAlphabet.setAttribute("size", "1");
	getAlphabet.setAttribute("id", "smallAlphabet"+finalArraySmallAlpha);
	
	finalArrayBigAlpha += 1;
	
	var getStates = document.createElement("INPUT");
	getStates.setAttribute("type", "text");
	getStates.setAttribute("size", "1");
	getStates.setAttribute("id", "bigAlphabet"+finalArrayBigAlpha);
	
	var nodeName = document.createElement(nodeName);
	nodeName.innerHTML = " | ";
	
	document.getElementById(containerID).appendChild(getAlphabet);
	document.getElementById(containerID).appendChild(getStates);
	document.getElementById(containerID).appendChild(nodeName);
	
}

function addFinalState(containID)
{
	finalArrayBigAlpha += 1;
	
	var getStates = document.createElement("INPUT");
	getStates.setAttribute("type", "text");
	getStates.setAttribute("size", "1");
	getStates.setAttribute("id", "finalbigAlphabet"+finalArrayBigAlpha);
	
	var string = document.createElement(nodeName);
	string.innerHTML = " => ";
	
	var getAlphabet = document.createElement("INPUT");
	getAlphabet.setAttribute("type", "text");
	getAlphabet.setAttribute("size", "1");
	getAlphabet.setAttribute("id", "finalsmallAlphabet"+finalArraySmallAlpha);
	
	var nodeName = document.createElement(nodeName);
	nodeName.innerHTML = " ";
	
	arrayBigAlpha += 1;
	
	var getStates2 = document.createElement("INPUT");
	getStates2.setAttribute("type", "text");
	getStates2.setAttribute("size", "1");
	getStates2.setAttribute("id", "finalbigAlphabet"+finalArrayBigAlpha);
	
	var data = document.createElement(data);
	data.innerHTML = " | ";
	
	finalArrayContainer += 1;
	
	var newContainers = document.createElement('span');
	newContainers.setAttribute("id", "finalalphabetContainer"+finalArrayContainer);
	
	finalArrayButton += 1;
	
	var dataF = "finalalphabetContainer"+finalArrayContainer;
	console.log("dataF -> " + dataF);
	
	var btn = document.createElement("BUTTON");
	btn.innerHTML = "Add Final Alphabet";
	btn.setAttribute("type", "button");
	btn.setAttribute("id", "finalbutton"+finalArrayButton);
	btn.setAttribute("onclick", "addAlphabet(" + "'" + 'finalalphabetContainer' + finalArrayContainer + "'" + ")");
	
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