require(["jquery", "BookAdd","BookRemove"], function($) {
    //the BookRemove.js and BookAdd.js plugins have been loaded.
    $('#AddBook1').click(function() {
        $('#Shelf1').AddBook();
});
$('#AddBook2').click(function() {
        $('#Shelf2').AddBook();
});
	    $('#RemoveBook1').click(function() {
        $('#Shelf1').RemoveBook();
}); 
	    	    $('#RemoveBook2').click(function() {
        $('#Shelf2').RemoveBook();
}); 
    });


