// Create a new router
const express = require("express");
const router = express.Router();

// Define our data
var shopData = {
    shopName: "Drinks R Us",
    productCategories: ["Beer", "Wine", "Soft Drinks", "Hot Drinks"],
    shops: [
        {
            location: "Drinks R Us",
            manager: "Alice Johnson",
            address: "27 St Donatts Rd, London SE14 6NU"
        },
        {
            location: "Drinks R Us",
            manager: "Harpasebensha Ammenepthes",
            address: "64 Harley St, London W1G 7HB"
        },
        {
            location: "Drinks R Us",
            manager: "Tu Seung-Min",
            address: "73 Gunnersbury Ave, London W5 4LP"
        }
    ]
};

// Handle the main routes
router.get("/", function(req, res) {
    res.render("index.ejs", shopData);
    });
    
    router.get("/about", (req, res) => {
        res.render("about.ejs", shopData);
    });
    
    router.get("/search", (req, res) => {
        res.render("search.ejs", shopData);
    });  

    router.get('/search_result', function (req, res) {
        // Pull out the form data individually
        const keyword = req.query.search_text;
        const category = req.query.category;
    
        // Send a message showing what was entered
        res.send("You searched for " + keyword + " in " + category);
    });

    router.get("/register", (req, res) => {
        res.render("register.ejs", shopData); 
    });

    router.post("/registered", (req, res) => {
        const firstName = req.body.first;
        const lastName = req.body.last;
        const email = req.body.email;
    
        // Optional: Basic server-side email validation using regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.send("Invalid email address. Please go back and enter a valid email.");
        }
    
        res.send(`Hello ${firstName} ${lastName}, you are now registered with the email: ${email}`);
    });    
    
    
// TODO

// Export the router object so index.js can access it
module.exports = router;