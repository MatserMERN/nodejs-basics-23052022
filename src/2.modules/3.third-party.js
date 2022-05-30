const express = require("express")
const app = express()
const users = require("../users.json")

app.get("/", (request, response) =>{
    response.send("Welcome to expressJS API")
})

app.get("/users", (request, response) => {
    response.json(users)
})

app.get("/employees", (request, response) => {
    let employees = [
        {id: 1, name: "Scott Desatnick"},
        {id: 2, name: "Adam Colson"},
        {id: 3, name: "Tuan Bui"},
    ]
    response.json(employees)
})

app.get("*", (request, response) => {
    response.json("Please contact administrator")
})

const PORT = 3001

app.listen(PORT, () =>{
    console.log(`Server is listening at PORT ${PORT}`)
})