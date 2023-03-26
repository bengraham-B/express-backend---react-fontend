const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3000;

// set up the Apple Books API URL with the search term "Harry Potter"
const searchTerm = "Harry Potter";
const url = `https://itunes.apple.com/search?term=${searchTerm}&entity=ebook`;

// set up a route to make the fetch request to the Apple Books API
app.get('/books', (req, res) => {
  fetch(url)
    .then(response => response.json()) // parse the response as JSON
    .then(data => {
      res.send(data); // send the data back as a response
    })
    .catch(error => {
      console.error(error); // handle any errors
      res.status(500).send('Error fetching books'); // send an error response
    });
});

// start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
