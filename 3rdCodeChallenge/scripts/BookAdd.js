$.fn.AddBook = function() {

        var BookName = prompt("Type book name");
        var Author = prompt("Type author");
     return this.append("<tr><td>"+BookName+"</td><td>"+Author+"</td></tr>");

};

