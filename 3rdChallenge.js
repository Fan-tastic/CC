function Library()
{
//javascript doesn't have a function to remove specified element from array
//Define function for array to search the specified element (index)
	this.prototype.indexOf = function(val) 
	{
            for (var i = 0; i < this.length; i++) 
            {
                if (this[i] == val) return i; //if exisit return i
            }
            return -1;
    };
//Create function "remove" for delete the specified element from array
    this.prototype.remove = function(val) 
    {
            var index = this.indexOf(val); //call indexOf() to get the return value
            if (index > -1) 
            {
                this.splice(index, 1);//splice() for insert,delete or replace elements in array
            }
    };

	this.shelves = [];

//add/remove shelf from library
	this.AddShelf = function()
	{
		var NewShelf = prompt("Input the new shelf name here");
		this.shelves.push(NewShelf);
	};

	this.DelShelf = function()
	{
        var OldShelf = prompt("Input the shelf name you want to delete");
        this.shelves.remove(Oldshelf);
	};

//add/remove book from shelf
	this.shelves.books = function(Bookname, Author)
	{
		this.shelves.books.Bookname = Bookname;
		this.shelves.books.Author = Author;
	}


	this.AddBook = function()
	{
	    var NewBookName = prompt("Input the new book name");
	    var NewAuthor = prompt("Input the book author");
	    var NewBook = new this.shelves.books(NewBookName,NewAuthor);
	    this.shelves.books.push(NewBook);
	}

	this.DelBook = function()
	{
        var DelBookName = prompt("Input the book name you want to delete");
        this.shelves.books.remove(DelBookName);
	}
}

