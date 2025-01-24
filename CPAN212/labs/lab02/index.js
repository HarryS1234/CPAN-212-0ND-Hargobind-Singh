const express = require("express");
const lab_router = require("./routers/lab_router"); // Correct import for lab_router
const PORT = process.env.PORT || 8000;

const app = express();

// Middleware for the lab router
app.use("/lab", lab_router);

// Define the root route
app.get("/", (req, res) => {
    res.send("Welcome to the server, Mr. Harry");
});

// Start the server
app.listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT}`);
});
