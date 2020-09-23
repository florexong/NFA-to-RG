// append row to the HTML table
function appendRow() {
    var tbl = document.getElementById('rgTable'), // table reference
        row = tbl.insertRow(tbl.rows.length),      // append table row
        i;
		
    // insert table cells to the new row
    for (i = 0; i < tbl.rows[0].cells.length; i++) {
        var td = document.createElement('td');
		td = row.insertCell(i);
		if(i == 0)
		{
			var newCell = row.insertCell(i);
			newCell.innerHTML = "New State(s)";
			//createCell(row.insertCell(i), "New State", 'row');
		}
		else
		{
			var ele = document.createElement('input');
			ele.setAttribute('type', 'text');
			ele.setAttribute('value', '');
			td.appendChild(ele);
		}
		//
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
    for (i = 0; i <= tbl.rows.length; i++)
	{
		var td = document.createElement('td');
		td = tbl.rows[i].insertCell(tbl.rows[i].cells.length);
		if(i == 0)
		{
			//var newCell = tbl.rows[i].insertCell(tbl.rows[i].cells.length);
			//newCell.innerHTML = "New Alphabet";
			//createCell(tbl.rows[i].insertCell(tbl.rows[i].cells.length), "Cells", 'col');
		}
		else
		{
			var ele = document.createElement('input');
			ele.setAttribute('type', 'text');
			ele.setAttribute('value', 'T');
			td.appendChild(ele);
		}
		
        //
    }
}