function createTable()
{


    var theader = '<table border="1">\n';
    var tbody = '';

    //var a1 = document.getElementById('a1').value;
	//var a2 = document.getElementById('a2').value;
	//var a3 = document.getElementById('a3').value;
	//var a4 = document.getElementById('a4').value;
	
	//var s1 = document.getElementById('s1').value;
	//var s2 = document.getElementById('s2').value;
	//var s3 = document.getElementById('s3').value;
	//var s4 = document.getElementById('s4').value;
	//var s5 = document.getElementById('s5').value;
	

	
    for( var i=0; i<stateNum+1;i++)
    {
        tbody += '<tr>';
        for( var j=0; j<alphabetNum+1;j++)
        {
            tbody += '<td>';
            tbody += 'Cell ' + i + ',' + j;
            tbody += '</td>'
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