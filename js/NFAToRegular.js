var alphabetValue = [];
var stateValue = [];
	
function convertToRG()
{
    var tbody = '';
    for( var i=0; i<stateNum;i++)
    {
		tbody += stateValue[i] + '<span style="font-size:30px;">&#8594;</span>' 
        for( var j=0; j<alphabetNum+1;j++)
        {
			if(j==0){
				//var tempValue = document.getElementById("s"+(i+1)).value;
				//stateValue.push(tempValue);
			}
			else{
				var tempValue = document.getElementById("tableInput"+ i + j).value;
				if (tempValue!='∅')
				{
					tbody += alphabetValue[j-1] + tempValue + ' | ';
				}
			}
        }
        tbody += '<br>';
    }
    document.getElementById('RegularGrammer').innerHTML = tbody;
}


function createTable()
{


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
				tbody += '<td>' + tempValue + '</td>';
				stateValue.push(tempValue);
			}
			else{
				tbody += '<td>' + 'Cell ' + i + ',' + j +  '<input type="text" id="tableInput' + i + j + '" size="1" value="∅">';
			}
        }
        tbody += '</tr>';
    }
    var tfooter = '</table>';

	var button = '<input name="generate" type="button" value="Convert to RG!" onclick="convertToRG()"/>\n'
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