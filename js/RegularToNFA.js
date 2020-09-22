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
		if(i == 0)
		{
			createCell(row.insertCell(i), "Cell"+i, 'row');
		}
		else
			td.appendChild(ele);
		
		//createCell(row.insertCell(i), "Cell"+i, 'row');
    }
}
 
// create DIV element and append to the table cell
function createCell(cell, text, style) {
    
	cell.innerHTML = text;

}

// append column to the HTML table
function appendColumn() {
    var tbl = document.getElementById('rgTable'), // table reference
        i;
	
				
    // open loop for each row and append cell
    for (i = 0; i < tbl.rows.length; i++) {

		var td = document.createElement('td');
		var ele = document.createElement('input');
		ele.setAttribute('type', 'text');
		ele.setAttribute('value', '');
		if(i == 0)
		{
			createCell(tbl.rows[i].insertCell(tbl.rows[i].cells.length), "Cell"+i, 'col')
			td = tbl.rows[i].insertCell(tbl.rows[i].cells.length);	
			td.appendChild(ele);
		}
		else
			td = tbl.rows[i].insertCell(tbl.rows[i].cells.length);	
			td.appendChild(ele);
        //createCell(tbl.rows[i].insertCell(tbl.rows[i].cells.length), "Cell"+i, 'col');
    }
}