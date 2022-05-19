//Gets Data about Books
const data = fetch('books.json') //path to the file with json data
        .then(response => {
            return response.json();
        })
        .then(data => {
            createBook(data);
        });

// Creates Book
function createBook(data) {
    for (let i = 0; i < data.length; i++) {
        // Create HTMl Elements
        const book = document.createElement("div");
        const bookTitle = document.createElement("h3");
        const author = document.createElement("p");
        const price = document.createElement("p");
        const description = document.createElement("p");
        const img = document.createElement("img");
        
        // Define HTMl Class/id names
        book.className = "book";
        img.className = "book-img";

        // assign values to HTML elements
        bookTitle.innerHTML = data[i]["title"];
        author.innerHTML = data[i]["author"];
        description.innerHTML = data[i]["description"];
        price.innerHTML = "Price: " + data[i]["price"];
        img.src = data[i]["imageLink"];
        
        //append HTML elements
        books.append(book);
        book.append(bookTitle);
        book.append(author);
        book.append(description);
        book.append(price);
        book.append(img);
    }
}
        
//Main Heading
const heading = document.createElement("h1");
heading.setAttribute("id", "heading");
heading.innerHTML = "Book Shop";
document.body.append(heading);

//Books Container
const booksContainer = document.createElement("div");
booksContainer.setAttribute("id", "books-container");
document.body.append(booksContainer);

//Books Heading
const booksHeading = document.createElement("h2");
booksHeading.setAttribute("id", "books-heading");
booksHeading.innerHTML = "Books Catalog";
booksContainer.append(booksHeading);

//Books Flex Box
const books = document.createElement("div");
books.setAttribute("id", "books");
booksContainer.append(books);







