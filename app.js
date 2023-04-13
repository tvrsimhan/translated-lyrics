import express from "express"
import { cors } from "./middleware.js"

const app = express()
const PORT = process.env.PORT || 3003

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", cors, (_, res) => {
	res.status(200).send("stuff")
})
