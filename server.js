const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.json({message: "Welcome to my application."})
})

require("./app/routes/customer.routes.js")(app);

app.listen(3000, () => {
    console.log("Server is running on port 3000.")
})
