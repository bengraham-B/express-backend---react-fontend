const express = require("express")
const app = express()

const PORT = 5002

const itunes = "https://affiliate.itunes.apple.com/resources/documentation/itunes-store -web-service-search-api/."

app.get("/api", (req, res) => {
    res.json({"webProjects":[
        "Make an clock in ReactJS.", 
        "Build an E-commerce site.", 
        "Make a game in ReactJS",
        "Make a clone of a popular website/web app in ReactJS"
    ]})
})

app.listen(PORT, () => {
    console.log("Server Running on PORT: " + PORT)
})