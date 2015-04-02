function Library()
{
	this.shelves = [];
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

//add/remove shelf from library
	this.addShelf = function(newShelf)
	{
		this.shelves.push(newShelf);
	};

	this.removeShelf = function(oldshelf)
	{
        this.shelves.remove(oldshelf);
	};
};
//add/remove book from shelf
function Shelf(shelfName)
{
	this.books = [];
	this.shelfName = shelfName;

	this.addBook = function(newBook)
	{
		this.books.push(NewBook);
	};

	this.removeBook = function(oldBook)
	{
        this.books.remove(OldBook);
	};
};

function Book(bookname, author)
{
		this.bookname = bookname;
		this.author = author;
};

var newShelf = new Library('Computer Science');
Library.addShelf(newShelf);

var oldshelf = new Library('Geoscience');
Library.removeShelf(oldshelf);

var newShelf1 = new Shelf('History');
Library.addShelf(newShelf1);

var newBook = new Book('Javacript','Tom');
Shelf.addBook(newBook);

var oldBook = new Book('3D Seismic','Jerry');
Shelf.removeBook(oldBook);



