/* javascript.js */

const cards = document.querySelector('.cards');

let myLibrary = [{ title: "It", author: "Stephen King", pages: "550", read: "read"}, 
                { title: "The Road", author: "Cormac McCarthy", pages: "300", read: "not read"}, 
                { title: "Life After God", author: "Douglas Coupland", pages: "238", read: "read"}];

let displayArray = [];

let libraryLength = myLibrary.length;

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read} yet`;
    }
};

function displayLibrary() {
    myLibrary.forEach(Book => {
        displayArray.push(Book);
    });
    return displayArray;
};

function getCards() {
    myLibrary.forEach(Book => {
        const card = document.createElement('div');
        card.classList.add('card');
        const header = document.createElement('h1');
        const header2 = document.createElement('h2');
        const header3 = document.createElement('h3');
        const header4 = document.createElement('h4');


        const bookTitle = document.createTextNode(Book.title);
        const bookAuthor = document.createTextNode(Book.author);
        const bookPages = document.createTextNode(Book.pages);
        const bookRead = document.createTextNode(Book.read);


        card.appendChild(header);
        card.appendChild(header2);
        card.appendChild(header3);
        card.appendChild(header4);

        header.appendChild(bookTitle);
        header2.appendChild(bookAuthor);
        header3.appendChild(bookPages);
        header4.appendChild(bookRead);


        cards.appendChild(card);
    });

    const newButtonDiv = document.createElement('div')
    newButtonDiv.classList.add('addButton');


    const addButton = document.createElement('button');
    const buttonText = document.createTextNode("ADD NEW BOOK");

    addButton.appendChild(buttonText);
    newButtonDiv.appendChild(addButton);

    cards.appendChild(newButtonDiv);


};