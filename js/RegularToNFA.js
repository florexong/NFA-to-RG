function addRow() 
{
	var table = document.getElementById("rgTable");
	
	var row = table.insertRow(-1);
	var celList = document.getElementById('rgTable').rows[0].cells.length;
	
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	cell1.innerHTML = "1";
	cell2.innerHTML = "L2";
	cell3.innerHTML = "NL3";
}

function addColumn() 
{
	var row = document.getElementById("myRow");
	var x = row.insertCell(-1);
	x.innerHTML = "New cell";
}


// append row to the HTML table
function appendRow() {
    var tbl = document.getElementById('rgTable'), // table reference
        row = tbl.insertRow(tbl.rows.length),      // append table row
        i;
    // insert table cells to the new row
    for (i = 0; i < tbl.rows[0].cells.length; i++) {
        var td = document.createElement('td');
		td = row.insertCell(i);
		
		var ele = document.createElement('input');
		ele.setAttribute('type', 'text');
		ele.setAttribute('value', '');
		td.appendChild(ele);
		
		//createCell(row.insertCell(i), "Cell"+i, 'row');
    }
}
 
// create DIV element and append to the table cell
function createCell(cell, text, style) {
    
	cell.innerHTML = text;
	//var div = document.createElement('div'), // create DIV element
    //    txt = document.createTextNode(text); // create text node
    //div.appendChild(txt);                    // append text node to the DIV
    //div.setAttribute('class', style);        // set DIV class attribute
    //div.setAttribute('className', style);    // set DIV class attribute for IE (?!)
    //cell.appendChild(div);                   // append DIV to the table cell
}

// append column to the HTML table
function appendColumn() {
    var tbl = document.getElementById('rgTable'), // table reference
        i;
    // open loop for each row and append cell
    for (i = 0; i < tbl.rows.length; i++) {
		var td = document.createElement('td');
		td = tbl.rows[i].insertCell(tbl.rows[i].cells.length);
		
		var ele = document.createElement('input');
		ele.setAttribute('type', 'text');
		ele.setAttribute('value', '');
		td.appendChild(ele);
        //createCell(tbl.rows[i].insertCell(tbl.rows[i].cells.length), "Cell"+i, 'col');
    }
}