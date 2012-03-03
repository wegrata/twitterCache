function(head, req) {
    var row = null;
    while (row = getRow()) {
    	var date = new Date(Date.parse(row.doc.created_at));
    	send(date.toLocaleTimeString() + " " + row.doc.user.name + ": " + row.doc.text + '\n');
    }
}