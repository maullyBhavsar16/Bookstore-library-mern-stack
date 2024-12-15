const express = require('express');
const router = express.Router();
const Book = require('../models/bookModel');

router.get('/', async (req, res) => {
    try {
        const books = await Book.find({});
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/', async (req, res) => {
    const { title, author, genre, publishedDate, price } = req.body;

    const book = new Book({
        title,
        author,
        genre,
        publishedDate,
        price,
    });

    try {
        const createdBook = await book.save();
        res.status(201).json(createdBook);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
