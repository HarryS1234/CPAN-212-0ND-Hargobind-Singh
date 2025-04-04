const mongoose = require("mongoose");

// Making the Schema
const RecipeSchema = new mongoose.Schema(

    {
        name: {
            type: String,
            required: true

        },

        description: {

            type: String,
            required: true
        },
        difficulty: {

            type: String,
            required: true
        },

        ingredients: {

            type: [String],
            required: true
        },
        Steps: {

            type: [String],
            required: true
        }
    }
)

module.exports = mongoose.model('recipe', RecipeSchema);
//exporting the schema to use it in our router