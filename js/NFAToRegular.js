function CheckResult()
{
	for(var w = 1; w <=checkStringNum; w++)
	{
		var check = document.getElementById("checkString"+w).value;
		result = checkStringFunction(check);
		document.getElementById('outputCheckString'+w).innerHTML = " " + result;
	}
}

function checkStringFunction(input)
{
	var success = 'Reject';
	var ableToProceed = 'true';
	
	var nextState = startStateValue;
	for( var y = 0; y<input.length;y++)
	{
		var process = 'false';
		success = 'Reject';
		
		for( var i=0; i<stateNum;i++)
		{
			if(stateValue[i]==nextState && process=='false' && ableToProceed=='true'){
			ableToProceed = 'false'
			var inputStateArray = [];
			var inputStateCorrespondingAlphabet = [];
			for( var j=0; j<alphabetNum+1;j++)
			{
				if(j==0){
				}
				else{
					var inputState = document.getElementById("tableInput"+ i + j).value;

					if (inputState!='∅' && inputState!='')
					{
						//tbody += alphabetValue[j-1] + inputState + ' | ';
						inputStateCorrespondingAlphabet.push(alphabetValue[j-1]);
						inputStateArray.push(inputState);
					}
				}
			}
		
			for(var x = 0; x<inputStateCorrespondingAlphabet.length; x++)
			{
				if(input[y] == inputStateCorrespondingAlphabet[x])
				{
					nextState = inputStateArray[x];
					if (finalStateValue.includes(nextState)){
						success = 'Accept';
					}else{
						success = 'Accept';
					}
					ableToProceed = 'true';
				}
			}
			process='true';
		}
		}
	}
	return success;
}

	

var alphabetValue = [];
var stateValue = [];
	
function convertToRG()
{
	document.getElementById('RegularGrammer').innerHTML = '';
    var tbody = '';
    for( var i=0; i<stateNum;i++)
    {
		var inputStateArray = [];
		var inputStateCorrespondingAlphabet = [];
        for( var j=0; j<alphabetNum+1;j++)
        {
			if(j==0){

			}
			else{
				var inputState = document.getElementById("tableInput"+ i + j).value;

				if (inputState!='∅' && inputState!='')
				{
					//tbody += alphabetValue[j-1] + inputState + ' | ';
					inputStateCorrespondingAlphabet.push(alphabetValue[j-1]);
					inputStateArray.push(inputState);
				}
			}
        }
		
		if(inputStateArray.length!=0)
		{
			tbody += stateValue[i] + '<span style="font-size:30px;">&#8594;</span>';
			if(inputStateCorrespondingAlphabet[0]=='e')
			{
				tbody += inputStateArray[0];
			}
			else
			{
				tbody += inputStateCorrespondingAlphabet[0] + inputStateArray[0];
			}
		}
		
		for( var x=1; x<inputStateArray.length;x++){
			if(inputStateCorrespondingAlphabet[x]=='e')
			{
				tbody += ' | ' + inputStateArray[x];
			}
			else
			{
				tbody += ' | ' + inputStateCorrespondingAlphabet[x] + inputStateArray[x];
			}
		}
		
		if((finalStateValue.includes(stateValue[i])) && inputStateArray.length==0)
		{
			tbody += stateValue[i] + '<span style="font-size:30px;">&#8594;</span> ε';
		}
		else if (finalStateValue.includes(stateValue[i]))
		{
			tbody += ' | ε';
		}
		
        tbody += '<br>';
    }
	
    document.getElementById('RegularGrammer').innerHTML = tbody;
	
	var checkStringbody = '<table border="1"><td>';

	checkStringbody += 'Check strings (input)<br>'
	
	checkStringbody +='<input type="text" id="checkString1"><span id="outputCheckString1"></span><br><div id="checkStringContainer"></div><button type="button" onclick="appendCheckStringInput()">+</button><br></td><td>'
	
	checkStringbody += '<button type="button" onclick="CheckResult()">Check String</button><br>'
	
	checkStringbody += '</td></table>'
	
	document.getElementById('CheckString').innerHTML = checkStringbody;
	
}

var startStateValue ='';
var finalStateValue = [];
function createTable()
{

	startStateValue = document.getElementById("startState").value;
	
	for(var i=0; i<finalStateNum; i++)
	{
		var tempValue = document.getElementById("finalState"+(i+1)).value;
		finalStateValue.push(tempValue);
	}
	
    var theader = '<table border="1">\n';
    var tbody = '';
	
	tbody += '<tr>';
	tbody += '<td>' + '' + '</td>';
	for(var i=0; i<alphabetNum; i++)
	{
		var tempValue = document.getElementById("a"+(i+1)).value;
		tbody += '<td>' + tempValue + '</td>';
		alphabetValue.push(tempValue);
	}

	tbody += '</tr>'
	
    for( var i=0; i<stateNum;i++)
    {
        tbody += '<tr>';
        for( var j=0; j<alphabetNum+1;j++)
        {
			if(j==0){
				var tempValue = document.getElementById("s"+(i+1)).value;
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
				stateValue.push(tempValue);
			}
			else{
				tbody += '<td>' +  '<input type="text" id="tableInput' + i + j + '" size="1" value="∅">';
			}
        }
        tbody += '</tr>';
    }
    var tfooter = '</table>';

	var button = '<input name="generate" type="button" value="Convert to RG" onclick="convertToRG()"/>\n'
    document.getElementById('NFATable').innerHTML = theader + tbody + tfooter + button;

}

var alphabetNum = 1;
function appendAlphabet() 
{
	alphabetNum+=1;
	var inputAlphabet = document.createElement("INPUT");
	inputAlphabet.setAttribute("type", "text");
	inputAlphabet.setAttribute("size", "1");
	inputAlphabet.setAttribute("id", "a"+alphabetNum);
	document.getElementById('alphabetContainer').appendChild(inputAlphabet);
}

var stateNum = 1;
function appendState() 
{
	stateNum+=1;
	var inputState = document.createElement("INPUT");
	inputState.setAttribute("type", "text");
	inputState.setAttribute("size", "1");
	inputState.setAttribute("id", "s"+stateNum);
	document.getElementById('stateContainer').appendChild(inputState);
}

var finalStateNum = 1;
function appendFinalState() 
{
	finalStateNum+=1;
	var finalState = document.createElement("INPUT");
	finalState.setAttribute("type", "text");
	finalState.setAttribute("size", "1");
	finalState.setAttribute("id", "finalState"+finalStateNum);
	document.getElementById('finalContainer').appendChild(finalState);
}

var checkStringNum = 1;
function appendCheckStringInput()
{
	checkStringNum+=1;
	var checkString = document.createElement("INPUT");
	checkString.setAttribute("type", "text");
	checkString.setAttribute("id", "checkString"+checkStringNum);
	var CheckResult = document.createElement("SPAN");
	checkString.setAttribute("type", "text");
	CheckResult.setAttribute("id", "outputCheckString"+checkStringNum);
	var breakLine = document.createElement("BR");
	document.getElementById('checkStringContainer').appendChild(checkString);
	document.getElementById('checkStringContainer').appendChild(CheckResult);
	document.getElementById('checkStringContainer').appendChild(breakLine);
}