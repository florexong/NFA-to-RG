var DataAlphabets = [];
var finalStateValue=[];

var TableDataAlphabets = [];
var State =[];

var inputStateArray = [];
var inputStateCorrespondingAlphabet = [];
var inputStateCorrespondingState = [];

function displayTable()
{
	TableDataAlphabets = [];
	
		/*** Table for NFA      ***/
	var theader = '<table border="1">\n';
    var tbody = '';
    var tbody1 = '';
	
	tbody += '<tr>';
	tbody += '<td>' + '' + '</td>';

	var dataScanned = false;
	
	for(var stateCount = 1; stateCount <= arrayStates; stateCount++)
	{
		var getState = document.createElement("text");
		getState.innerHTML = document.getElementById("State"+stateCount).value;
		State.push(getState.innerHTML);
		
		if(getState.innerHTML != "")
		{
			if(stateCount == 1){
				//document.getElementById("StatesState").appendChild(getState);
				tbody1 += '<tr>'
					tbody1 += '<td>' + "-->" + getState.innerHTML + '</td>'
				
					/** Next Column from States ***/
					for(var getNextInput = 1; getNextInput <= dataKeeper; getNextInput++)
					{
						if(document.getElementById("State"+stateCount+"nextStates"+getNextInput) == null)
						{ 
							console.log("State"+stateCount+"nextStates"+getNextInput+" -!-> Skipped!");
							tbody1 += '<td>' + 'Ø' + '</td>';
						}
						else
						{
							var getAlphas = document.createElement("text");
							getAlphas.innerHTML = document.getElementById("State"+stateCount+"nextStates"+getNextInput).value;
							tbody1 += '<td>' + getAlphas.innerHTML + '</td>';
							inputStateArray.push(getAlphas.innerHTML);
							inputStateCorrespondingState.push(getState.innerHTML);
						}
					}
					
					/** Epsilon Part **/
					tbody1 += '<td>' + 'Ø' + '</td>';
				tbody1 += '</tr>';
			}
			else
			{
				//document.getElementById("StatesState").appendChild(getState);
				tbody1 += '<tr>'
					tbody1 += '<td>' + getState.innerHTML + '</td>'
				
					for(var getNextInput = 1; getNextInput <= dataKeeper; getNextInput++)
					{
						if(document.getElementById("State"+stateCount+"nextStates"+getNextInput) == null)
						{ 
							console.log("State"+stateCount+"nextStates"+getNextInput+" -!-> Skipped!");
							tbody1 += '<td>' + 'Ø' + '</td>';
						}
						else
						{
							var getAlphas = document.createElement("text");
							getAlphas.innerHTML = document.getElementById("State"+stateCount+"nextStates"+getNextInput).value;
							tbody1 += '<td>' + getAlphas.innerHTML + '</td>';
							inputStateArray.push(getAlphas.innerHTML);
							inputStateCorrespondingState.push(getState.innerHTML);
						}
					}
				
					tbody1 += '<td>' + 'Ø' + '</td>';
				tbody1 += '</tr>';
			}

		}
		
		for(var alphaCount = 1; alphaCount <= dataKeeper; alphaCount++)
		{
			dataScanned = false;
			//console.log("State"+stateCount+"nextInput"+alphaCount);
			if(document.getElementById("State"+stateCount+"nextInput"+alphaCount) == null)
			{ 
				console.log("State"+stateCount+"nextInput"+alphaCount+" -!-> Skipped!");
			}
			else
			{
				var getAlphas = document.createElement("text");
				getAlphas.innerHTML = document.getElementById("State"+stateCount+"nextInput"+alphaCount).value;
				
				console.log("State" + stateCount + "nextInput" + alphaCount + " ---> " + getAlphas.innerHTML);
				inputStateCorrespondingAlphabet.push(getAlphas.innerHTML);
				dataScanned = true;
			}
			
			if(!TableDataAlphabets.includes(getAlphas.innerHTML) && (getAlphas.innerHTML != null && getAlphas.innerHTML != ""))
			{
				if(dataScanned == true)
				{
					//document.getElementById("AlphabetsState").appendChild(getAlphas);
					TableDataAlphabets.push(getAlphas.innerHTML);
					tbody += '<td>' + getAlphas.innerHTML + '</td>';
				}
			}
		}
	}
	
	for(var FinalstateCount = 1; FinalstateCount <= arrayFinalState; FinalstateCount++)
	{
		
		var getState = document.createElement("text");
		getState.innerHTML = document.getElementById("FinalState"+FinalstateCount).value;
		State.push(getState.innerHTML);
		finalStateValue.push(getState.innerHTML);
		
		if(getState.innerHTML != " ")
		{
			//document.getElementById("EndingState").appendChild(getState);
			tbody1 += '<tr>'+'<td>' + "*" + getState.innerHTML + '</td>' + '</tr>';
		}
		
		for(var FinalalphaCount = 1; FinalalphaCount <= dataFinalKeeper; FinalalphaCount++)
		{
			dataScanned = false;
			//console.log("State"+FinalstateCount+"NextInput"+FinalalphaCount);
			if(document.getElementById("finalState"+FinalstateCount+"NextInput"+FinalalphaCount) == null)
			{ 
				console.log("finalState"+FinalstateCount+"NextInput"+FinalalphaCount+" -!-> Skipped!");
			}
			else
			{
				try
				{
					var getAlphas = document.createElement("text");
					getAlphas.innerHTML = document.getElementById("finalState"+FinalstateCount+"NextInput"+FinalalphaCount).value;
					console.log("finalState"+FinalstateCount+"NextInput"+FinalalphaCount+" ---> "+getAlphas.innerHTML);
					var tempNextState = document.createElement("text");
					tempNextState.innerHTML = document.getElementById("finalState"+FinalstateCount+"NextState"+FinalalphaCount).value;
					inputStateArray.push(tempNextState.innerHTML);
					inputStateCorrespondingAlphabet.push(getAlphas.innerHTML);
					inputStateCorrespondingState.push(getState.innerHTML);
					dataScanned = true;
				}
				catch(err)
				{
					console.log(err);
					dataScanned = false;
				}
			}
			
			
			var commas = document.createElement("text");
			commas.innerHTML = ", ";
			
			if(!TableDataAlphabets.includes(getAlphas.innerHTML) && (getAlphas.innerHTML != null && getAlphas.innerHTML != ""))
			{
				if(dataScanned == true)
				{
					//document.getElementById("AlphabetsState").appendChild(getAlphas);
					TableDataAlphabets.push(getAlphas.innerHTML);
					tbody += '<td>' + getAlphas.innerHTML + '</td>';
				}
			}
		}
	}
	
	tbody += '<td>' + 'ε' + '</td>' ;
	tbody += '</tr>';

	var tfooter = '</table>';
	document.getElementById('NFAtable').innerHTML = theader + tbody + tbody1 + tfooter;
	console.log("Table code "+theader + tbody + tbody1 + tfooter);
	
	//Arun Table...........................
	startStateValue = State[0];
	
	
    var theader = '<table border="1">\n';
    var tbody = '';
	
	tbody += '<tr>';
	tbody += '<td>' + '' + '</td>';
	for(var i=0; i<TableDataAlphabets.length; i++)
	{
		var tempValue = TableDataAlphabets[i];
		tbody += '<td>' + tempValue + '</td>';
	}

	tbody += '</tr>'
	
    for( var i=0; i<State.length ;i++)
    {
        tbody += '<tr>';
        for( var j=0; j<TableDataAlphabets.length+1;j++)
        {
			if(j==0){
				var tempValue = State[i];
				if(tempValue == startStateValue)
				{
					tbody += '<td>' + '<span style="font-size:20px;">&#8594;</span>'+ tempValue + '</td>';
				}
				else if(finalStateValue.includes(tempValue))
				{
					tbody += '<td>' + '*' + tempValue + '</td>';
				}
				else
				{
					tbody += '<td>' + tempValue + '</td>';
				}
				//stateValue.push(tempValue);
			}
			else{
				tbody += '<td>' + '<span type="text" id="RGtableOutput' + i + j + '">∅</span>' + '</td>';
			}
        }
        tbody += '</tr>';
    }
    var tfooter = '</table>';

    document.getElementById('RGToNFATable').innerHTML = theader + tbody + tfooter;
	
	var inputStateArrayString = "";
	var inputStateCorrespondingAlphabetString = "";
	var inputStateCorrespondingStateString = "";
	var TestString = ""
	
	for( var j=0; j<inputStateArray.length;j++){
		TestString += "State = " + inputStateCorrespondingState[j] + " Alphabet = " + inputStateCorrespondingAlphabet[j] + " Next State = " + inputStateArray[j] + " <br>";
	}
	
	document.getElementById('TestingString').innerHTML = TestString;
	

	for( var x=0; x< inputStateCorrespondingState.length; x++){
	for( var i=0; i<State.length ;i++)
    {
		if(inputStateCorrespondingState[x] == State[i]){

			for( var j=0; j<TableDataAlphabets.length +1;j++)
			{
				if(j==0){

				}
				else{
					if(inputStateCorrespondingAlphabet[x]==TableDataAlphabets[j-1]){
						
					document.getElementById("RGtableOutput"+ i + j).innerHTML = inputStateArray[x];
				}
				}
			}
		}
	}
	}
	
}

function displayStates()
{
	/*** Region First State ***/
	var firstState = document.getElementById("StartingState");
	firstState.innerHTML = document.getElementById("State1").value;
	
	var clearData = document.getElementById("StatesState");
	clearData.innerHTML = "";
	
	/*** Region State ***/
	for(var stateCount = 1; stateCount <= arrayStates; stateCount++)
	{
		var getState = document.createElement("text");
		getState.innerHTML = document.getElementById("State"+stateCount).value;
		
		var commas = document.createElement("text");
		commas.innerHTML = ", ";
		
		if(getState.innerHTML != "")
		{
			document.getElementById("StatesState").appendChild(getState);
			document.getElementById("StatesState").appendChild(commas);
		}
	}

	for(var fstateCount = 1; fstateCount <= arrayFinalState; fstateCount++)
	{
		var getState = document.createElement("text");
		getState.innerHTML = document.getElementById("FinalState"+fstateCount).value;
		
		var commas = document.createElement("text");
		commas.innerHTML = ", ";
		
		if(getState.innerHTML != "")
		{
			document.getElementById("StatesState").appendChild(getState);
			document.getElementById("StatesState").appendChild(commas);
		}
	}
	
	
	/*** Region Alphabet ***/
	var dataScanned = false;
	for(var stateCount = 1; stateCount <= arrayStates; stateCount++)
	{
		for(var alphaCount = 1; alphaCount <= dataKeeper; alphaCount++)
		{
			dataScanned = false;
			//console.log("State"+stateCount+"nextInput"+alphaCount);
			if(document.getElementById("State"+stateCount+"nextInput"+alphaCount) == null)
			{ 
				console.log("State"+stateCount+"nextInput"+alphaCount+" -!-> Skipped!");
			}
			else
			{
				try
				{
					var getAlphas = document.createElement("text");
					getAlphas.innerHTML = document.getElementById("State"+stateCount+"nextInput"+alphaCount).value;
					console.log("State"+stateCount+" -> " + "State"+stateCount+"nextInput"+alphaCount+" ---> "+getAlphas.innerHTML);
					dataScanned = true;
				}
				catch(err)
				{
					console.log(err);
					dataScanned = false;
				}
			}
			
			
			var commas = document.createElement("text");
			commas.innerHTML = ", ";
			
			if(!DataAlphabets.includes(getAlphas.innerHTML) && (getAlphas.innerHTML != null && getAlphas.innerHTML != " "))
			{
				if(dataScanned == true)
				{
					document.getElementById("AlphabetsState").appendChild(getAlphas);
					document.getElementById("AlphabetsState").appendChild(commas);
					DataAlphabets.push(getAlphas.innerHTML);
				}
			}
		}
	}
	
	/*** Region Final State ***/
	var clearFinalData = document.getElementById("EndingState");
	clearFinalData.innerHTML = null;
	
	for(var FinalstateCount = 1; FinalstateCount <= arrayFinalState; FinalstateCount++)
	{
		var getState = document.createElement("text");
		getState.innerHTML = document.getElementById("FinalState"+FinalstateCount).value;
		
		var commas = document.createElement("text");
		commas.innerHTML = ", ";
		
		if(getState.innerHTML != " ")
		{
			document.getElementById("EndingState").appendChild(getState);
			document.getElementById("EndingState").appendChild(commas);
		}
	}
	
	/*** Region Final Alphabet State ***/
	for(var FinalstateCount = 1; FinalstateCount <= arrayFinalState; FinalstateCount++)
	{
		for(var FinalalphaCount = 1; FinalalphaCount <= dataFinalKeeper; FinalalphaCount++)
		{
			dataScanned = false;
			//console.log("State"+FinalstateCount+"NextInput"+FinalalphaCount);
			if(document.getElementById("finalState"+FinalstateCount+"NextInput"+FinalalphaCount) == null)
			{ 
				console.log("finalState"+FinalstateCount+"NextInput"+FinalalphaCount+" -!-> Skipped!");
			}
			else
			{
				try
				{
					var getAlphas = document.createElement("text");
					getAlphas.innerHTML = document.getElementById("finalState"+FinalstateCount+"NextInput"+FinalalphaCount).value;
					console.log("finalState"+FinalstateCount+"NextInput"+FinalalphaCount+" ---> "+getAlphas.innerHTML);
					dataScanned = true;
				}
				catch(err)
				{
					console.log(err);
					dataScanned = false;
				}
			}
			
			var commas = document.createElement("text");
			commas.innerHTML = ", ";
			
			if(!DataAlphabets.includes(getAlphas.innerHTML) && (getAlphas.innerHTML != null && getAlphas.innerHTML != ""))
			{
				if(dataScanned == true)
				{
					document.getElementById("AlphabetsState").appendChild(getAlphas);
					document.getElementById("AlphabetsState").appendChild(commas);
					DataAlphabets.push(getAlphas.innerHTML);
				}
			}
		}
	}
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
	for(var dataCheck = 1; dataCheck <= arrayContainer; dataCheck++)
	{
		var dataRead = 'alphabetContainer'+dataCheck;
		console.log(containerID + " -> is ?> " + dataRead + " == " + containerID);
		if(dataRead == containerID)
		{
			arrayNextInput += 1;
			
			var getAlphabet = document.createElement("INPUT");
			getAlphabet.setAttribute("type", "text");
			getAlphabet.setAttribute("size", "1");
			getAlphabet.setAttribute("id", "State"+dataCheck+"nextInput"+arrayNextInput);

			arrayNextState += 1;

			var getStates = document.createElement("INPUT");
			getStates.setAttribute("type", "text");
			getStates.setAttribute("size", "1");
			getStates.setAttribute("id", "State"+dataCheck+"nextStates"+arrayNextState);
			
			var nodeName = document.createElement("text");
			nodeName.innerHTML = " | ";
			
			document.getElementById(containerID).appendChild(getAlphabet);
			document.getElementById(containerID).appendChild(getStates);
			document.getElementById(containerID).appendChild(nodeName);
		}
	}
	console.log(" --> <--- ");
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
	
	var string = document.createElement("text");
	string.innerHTML = " => ";
	
	arrayNextInput += 1;
	
	var getAlphabet = document.createElement("INPUT");
	getAlphabet.setAttribute("type", "text");
	getAlphabet.setAttribute("size", "1");
	getAlphabet.setAttribute("id", "State"+arrayStates+"nextInput"+arrayNextInput);
	
	var nodeName = document.createElement("text");
	nodeName.innerHTML = " ";
	
	arrayNextState += 1;
	
	var getStates2 = document.createElement("INPUT");
	getStates2.setAttribute("type", "text");
	getStates2.setAttribute("size", "1");
	getStates2.setAttribute("id", "State"+arrayStates+"nextStates"+arrayNextState);
	
	var data = document.createElement("text");
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
	dataKeeper += 1;
	for(var dataCheck = 1; dataCheck <= finalArrayContainer; dataCheck++)
	{
		var dataRead = 'finalContainer'+dataCheck;
		console.log(containerID + " -> is ?> " + dataRead + " == " + containerID);
		if(dataRead == containerID)
		{
			arrayFinalNextInput += 1;
			
			var getAlphabet = document.createElement("INPUT");
			getAlphabet.setAttribute("type", "text");
			getAlphabet.setAttribute("size", "1");
			getAlphabet.setAttribute("id", "finalState"+dataCheck+"NextInput"+arrayFinalNextInput);

			arrayFinalNextState += 1;

			var getStates = document.createElement("INPUT");
			getStates.setAttribute("type", "text");
			getStates.setAttribute("size", "1");
			getStates.setAttribute("id", "finalState"+dataCheck+"NextState"+arrayFinalNextState);
			
			var nodeName = document.createElement("text");
			nodeName.innerHTML = " | ";
			
			document.getElementById(containerID).appendChild(getAlphabet);
			document.getElementById(containerID).appendChild(getStates);
			document.getElementById(containerID).appendChild(nodeName);
		}
	}
	console.log(" --> <--- ");
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
	
	var string = document.createElement("text");
	string.innerHTML = " => ";
	
	arrayFinalNextInput += 1;
	
	var getAlphabet = document.createElement("INPUT");
	getAlphabet.setAttribute("type", "text");
	getAlphabet.setAttribute("size", "1");
	getAlphabet.setAttribute("id", "finalState"+arrayFinalState+"NextInput"+arrayFinalNextInput);
	
	var nodeName = document.createElement("text");
	nodeName.innerHTML = " ";
	
	arrayFinalNextState += 1;
	
	var getStates2 = document.createElement("INPUT");
	getStates2.setAttribute("type", "text");
	getStates2.setAttribute("size", "1");
	getStates2.setAttribute("id", "finalState"+arrayFinalState+"NextState"+arrayFinalNextState);
	
	var data = document.createElement("text");
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
	btn.setAttribute("onclick", "addFinalAlphabet(" + "'" + 'finalContainer' + finalArrayContainer + "'" + ")");
	
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