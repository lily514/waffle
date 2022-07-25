// server/index.js

const express = require("express");

const PORT = process.env.PORT || 3004;

const app = express();

const path = require('path')
// Have Node serve the files for built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Handle GET requests to /api route
app.get("/api", (req, res) => {
    res.json({ message: "Hello from waffles!" });
});

// All other GET requests not handled before will return React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});