const express = require("express")
const app = express()
const router = express.Router()

router.get("/", (req, res) =>{
    res.json("Welcome to Student API")
})

router.get("/students", (req, res) => {
    res.json("Here you will get student info")
})

app.use("/api", router)

const PORT = 3001

app.listen(PORT, () => {
    console.log(`Server is listening at PORT ${PORT}`)
})