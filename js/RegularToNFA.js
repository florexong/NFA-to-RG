// append row to the HTML table
function appendRow() {
    var root=document.getElementById('rgTable').getElementsByTagName('tbody')[0];
    var rows=root.getElementsByTagName('tr');
    var clone=cloneEl(rows[rows.length-1]);
    root.appendChild(clone);
	
    // insert table cells to the new row
  //   for (i = 0; i < tbl.rows[0].cells.length; i++) {
  //       var td = document.createElement('td');
		// td = row.insertCell(i);
		// if(i == 0)
		// {
		// 	var newCell = row.insertCell(i);
		// 	newCell.innerHTML = "New State(s)";
		// 	//createCell(row.insertCell(i), "New State", 'row');
		// }
		// else
		// {
		// 	var ele = document.createElement('input');
		// 	ele.setAttribute('type', 'text');
		// 	ele.setAttribute('value', '');
		// 	td.appendChild(ele);
		// }
		// //
  //   }
}
 
// create DIV element and append to the table cell
function createCell(cell, text, style) {
    
	cell.innerHTML = text;

}

// append column to the HTML table
function appendColumn() {
    var rows = document.getElementById('rgTable').getElementsByTagName('tr'), // table reference
    i=0,r,c,clone;
    // open loop for each row and append cell
    while (r=rows[i++])
	{
		c =r.getElementsByTagName('td');
        clone=cloneEl(c[c.length-1]);
        c[0].parentNode.appendChild(clone);
		// var td = document.createElement('td');
		// td = tbl.rows[i].insertCell(tbl.rows[i].cells.length);
		// var ele = document.createElement('input');
		// ele.setAttribute('type', 'text');
		// ele.setAttribute('value', 'T');
		// td.appendChild(ele);
		
		
        //
    }
}
function cloneEl(el){
    var clo=el.cloneNode(true);
    return clo;
}