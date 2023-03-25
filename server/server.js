const express = require("express")
const app = express()

app.get("/api", (req, res) => {
    res.json({"users":["userOne", "userTwo", "userThree"]})
})

app.listen(5002, () => {
    console.log("Server Running on PORT:5002")
})