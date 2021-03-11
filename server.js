const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.json({message: "Welcome to my application."})
})

require("./app/routes/customer.routes.js")(app);

app.listen(8080, () => {
    console.log("Server is running on port 8080.")
})
