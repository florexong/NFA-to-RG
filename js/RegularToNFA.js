function displayStates(tableID)
{
}

arrayBigAlpha = 1;
arraySmallAlpha = 1;
/***
	Adding Alphabet and States for the States
	Increment Alphabet based on [arraySmallAlpha]
***/
function addAlphabet()
{
	arraySmallAlpha += 1;
	
	var getAlphabet = document.createElement("INPUT");
	getAlphabet.setAttribute("type", "text");
	getAlphabet.setAttribute("size", "1");
	getAlphabet.setAttribute("id", "smallAlphabet"+arraySmallAlpha);
	
	var getStates = document.createElement("INPUT");
	getStates.setAttribute("type", "text");
	getStates.setAttribute("size", "1");
	getStates.setAttribute("id", "bigAlphabet"+arraySmallAlpha);
	
	document.getElementById('alphabetContainer').appendChild(getAlphabet);
	document.getElementById('alphabetContainer').appendChild(getStates);
	//document.getElementById('alphabetContainer').appendChild(" | ");
}

/***
	Adding States
	Increment States based on [arrayBigAlpha]
***/
function addState()
{
	arrayBigAlpha += 1;
	var getData = document.createElement("INPUT");
	getData.setAttribute("type", "text");
	getData.setAttribute("size", "1");
	getData.setAttribute("id", "bigAlphabet"+arrayBigAlpha);
	document.getElementById('alphabetContainer').appendChild(getData);
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