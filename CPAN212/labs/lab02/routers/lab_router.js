const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Welcome to the lab router");

})
router.get("/:slug", (req, res) => {
    res.send(`Welcome ${req.params.slug}`);

}) // I have created a variable slug.

router.get("/name", (req, res) => {
    res.send(`Welcome ${"Hargobind Singh Mannan"}`);

})
router.get("/greeting", (req, res) => {
    res.send(`Welcome ${"Hello Hargobind"}`);

})
router.get("/add/:x/:y", (req, res) => {

    let x = parseFloat(req.params.x);
    let y = parseFloat(req.params.y);

    res.send(`The sum is ${x + y}`)
    // res.send(404)

})

router.get("/calculate/:a/:b/:operation", (req, res) => {
    const a = parseFloat(req.params.a); 
    const b = parseFloat(req.params.b); 
    const operation = req.params.operation; 

    if (isNaN(a) || isNaN(b)) {
        return res.status(400).send("Both a and b must be valid numbers.");
    }

    let result;

    switch (operation) {
        case "+":
            result = a + b;
            break;
        case "-":
            result = a - b;
            break;
        case "*":
            result = a * b;
            break;
        case "/":
            if (b === 0) {
                return res.status(400).send("Division by zero is invalid");
            }
            result = a / b;

            // For the divsion I need to write %2f
            break;
        case "%":
            result = a % b;
            break;
        default:
            return res.status(400).send("Invalid operation. Use +, -, *, /, or %.");
    }

    res.send(`The result of ${a} ${operation} ${b} is ${result}`);
});




module.exports = router; 