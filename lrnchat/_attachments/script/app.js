// Apache 2.0 J Chris Anderson 2011
$(function() {   
    // friendly helper http://tinyurl.com/6aow6yn
    $.getJSON('/twitter/_design/lrnchat/_view/by-date?group=true&stale=update_after',function(data){
    var i;
    var links = $("#links");
    for (i in data.rows){   
        var row = data.rows[i];
        var date = new Date(0, 0, row.key,0, 0, 0, 0);
        var link = $("<a>").attr('href',"/twitter/_design/lrnchat/_list/log/by-date?inclusive_end=false&stale=update_after&startkey="+row.key+"&endkey="+(row.key+1)+"&reduce=false&include_docs=true").html(date.toDateString());
        var div = $("<div>").append(link);
        links.append(div);
    }});
 });