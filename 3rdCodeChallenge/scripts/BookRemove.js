$.fn.RemoveBook = function() {
     alert("Search the book you want to remove from the shelf");
     var BookName = prompt("Type book name");
$('td:contains('+BookName+')').each(function(){
           if($(this).text() === BookName){
       	 $(this).parent().remove();
        } else {
        alert("Can not find the Book!");
        };
    });

};