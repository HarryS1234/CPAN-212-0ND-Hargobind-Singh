const express = require("express");
const recipes_router = require("./routes/recipes_router")

require("dotenv").config();
const mongoose = require("mongoose");
const app = express();


function mongasync(params) {

}
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("Connected Successfully to Mongo Db");
    }
    ).catch((error) => {
        console.log("Error connecting to Mongo Db: ", error);
    }
    )

// Middleware to parse the JSON
app.use(express.json())

// Using the router which handles all the recipe requests
app.use("/recipe", recipes_router)

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});