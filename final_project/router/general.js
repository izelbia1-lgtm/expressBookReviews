const express = require('express');
let books = require("./booksdb.js");

const public_users = express.Router();


// Get all books
public_users.get('/', function (req, res) {
    return res.status(200).json(books);
});


// Get book by ISBN
public_users.get('/isbn/:isbn', function (req, res) {
    const isbn = req.params.isbn;
    return res.status(200).json(books[isbn]);
});


// Get books by author
public_users.get('/author/:author', function (req, res) {

    const author = req.params.author;

    let filtered = Object.values(books).filter(
        (book) => book.author === author
    );

    return res.status(200).json(filtered);
});


// Get books by title
public_users.get('/title/:title', function (req, res) {

    const title = req.params.title;

    let filtered = Object.values(books).filter(
        (book) => book.title === title
    );

    return res.status(200).json(filtered);
});


// Get reviews
public_users.get('/review/:isbn', function (req, res) {

    const isbn = req.params.isbn;

    return res.status(200).json(books[isbn].reviews);
});

module.exports.public_users = public_users;
