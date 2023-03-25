const express = require("express")
const app = express()

const PORT = 5002

app.get("/api", (req, res) => {
    res.json({"webProjects":[
        "Make an clock in ReactJS.", 
        "Build an E-commerce site.", 
        "Make a game in ReactJS"
    ]})
})

app.listen(PORT, () => {
    console.log("Server Running on PORT: " + PORT)
})