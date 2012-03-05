function(head, req) {
	var formatDate = function(date) {
	    var d = new Date(date);
	    var hh = d.getHours();
	    var m = d.getMinutes();
	    var s = d.getSeconds();
	    var dd = "AM";
	    var h = hh;
	    if (h >= 12) {
	        h = hh-12;
	        dd = "PM";
	    }
	    if (h == 0) {
	        h = 12;
	    }
	    m = m<10?"0"+m:m;

	    s = s<10?"0"+s:s;

	    /* if you want 2 digit hours:
	    h = h<10?"0"+h:h; */
	    date = d.toLocaleTimeString()
	    var pattern = new RegExp("0?"+hh+":"+m+":"+s);

	    var repalcement = h+":"+m;
	    /* if you want to add seconds
	    repalcement += ":"+s;  */
	    repalcement += " "+dd;    

	    return date.replace(pattern,repalcement);
	}	
    var row = null;
    while (row = getRow()) {
    	var date = new Date(Date.parse(row.doc.created_at));
    	send(formatDate(date.toUTCString()) + " " + row.doc.user.screen_name + ": " + row.doc.text + '\n');
    }
}