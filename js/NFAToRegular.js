function createTable()
{


    var theader = '<table border="1">\n';
    var tbody = '';
	var alphabetValue = [];
	var stateValue = [];
	
	tbody += '<tr>';
	tbody += '<td>' + '' + '</td>';
	for(var i=0; i<alphabetNum; i++)
	{
		var tempValue = document.getElementById("a"+(i+1)).value;
		tbody += '<td>' + tempValue + '</td>';
		alphabetValue.push(tempValue);
	}

	tbody += '</tr>\n'
	
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
				tbody += '<td>' + 'Cell ' + i + ',' + j + '</td>';
			}
        }
        tbody += '</tr>\n';
    }
    var tfooter = '</table>';
    document.getElementById('wrapper').innerHTML = theader + tbody + tfooter;

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