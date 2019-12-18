const express = require('express');
const router = express.Router();
const Books = require('../models/books.js');

router.get('/', (req, res) => {
	Books.find({}).populate('user').exec((err, foundBooks) => {
		res.json(foundBooks);
	});
});

router.get('/:id', (req, res) => {
	Books.findById(req.params.id, (err, foundBook) => {
		res.json(foundBook);
	});
});

router.post('/', (req, res) => {
	Books.create(req.body, (err, createdBook) => {
		res.json(createdBook); //.json() will send proper headers in response so client knows it's json coming back
		// res.redirect(303, '/profile');
	});
});

router.delete('/:id', (req, res) => {
	Books.findByIdAndRemove(req.params.id, (err, deletedBook) => {
		res.redirect(303, '/');
	});
});

router.put('/:id', (req, res) => {
	console.log(req.body);
	Books.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedBook) => {
		res.json(updatedBook);
		//   console.log(updatedBook);
		// res.redirect(303, '/profile');
	});
});

module.exports = router;
