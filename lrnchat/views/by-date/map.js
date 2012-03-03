function(doc) {
	var date = Math.floor(Math.floor(Math.floor(Math.floor(Date.parse(doc.created_at)/1000)/60)/60)/24);
  	emit(date,1);
}