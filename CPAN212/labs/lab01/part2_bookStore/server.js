const express = require('express');
const path = require('path');

const app = express();
const PORT = 4000;

// Serve static files
app.use(express.static(path.join(__dirname, 'pages')));


app.get('/home', (req, res) => {
    res.sendFile('pages/home.html', { root: __dirname })
    // I am giving the relative path here , root is my current directory which is lab01
});


app.get('/books', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'books.html'));

    // This is also an option I can use path.join to join my current directory with pages folder and the html file.
});


app.post('/submit', (req, res) => {
    res.send('POST request received!');
    // This is a post request and I can use postman. I will share the screenshot.
});

// This is the middleware and it checks for error if res.status is 404 then It shows error page. I am using one  at the end so it works for any unspecified routes.
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'pages', 'error.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
