const express = require("express");
const router = express.Router();
const Recipe = require("../models/Recipe")

router.get('/', async (req, res) => {

    try {
        const recipes = await Recipe.find();
        res.status(200).json(recipes) // Means Okay 

    } catch (error) {

        res.status(500).json({ message: 'Error fetching recipes', error: error.message });
    }
}
)

//Post Request
router.post('/', async (req, res) => {

    try {
        // Object destructuring
        const { name, description, difficulty, ingredients, steps } = req.body;

        if (!name || !description || !difficulty || !ingredients || !steps) {

            return res.status(400).json({ message: "All fields are required" })

        } else {

            const newRecipe = new Recipe({
                name: name,
                description: description,
                difficulty: difficulty,
                ingredients: ingredients,
                steps: steps,
            });


            //saving the recipe 
            const savedRecipe = await newRecipe.save();
            res.status(201).json(savedRecipe)
            // 201 means created
        }


    } catch (error) {

        res.status(500).json({ message: 'Error adding recipes', error: error.message });
    }
}
)

// Finding by Id
router.get('/:id', async (req, res) => {

    try {
        const recipe = await Recipe.findById(req.params.id);

        if (!recipe) {
            return res.status(404).json({ message: "Recipe not found" });

        }
        res.status(200).json(recipe) // Means Okay 

    } catch (error) {

        res.status(500).json({ message: 'Error fetching recipes', error: error.message });
    }
})


// Update recipe by id 
router.put('/:id', async (req, res) => {

    try {
        // Object destructuring
        const { name, description, difficulty, ingredients, steps } = req.body;

        const updatedRecipe = await Recipe.findByIdAndUpdate(
            req.params.id,
            { name, description, difficulty, ingredients, steps },
            { new: true, runValidators: true }
        )

        if (!updatedRecipe) {

            return res.status(404).json({ message: "Recipe not Found" })
        }

        res.status(200).json(updatedRecipe);


    } catch (error) {

        res.status(500).json({ message: 'Error updating recipes', error: error.message });
    }
}
)

// Delete recipe by id 
router.delete('/:id', async (req, res) => {
    try {
        const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);
        if (!deletedRecipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }
        res.status(200).json({ message: 'Recipe deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting recipe', error: error.message });
    }
});

module.exports = router