const express = require("express")
const fs = require("fs/promises")
const path = require("path")

let songs = []
async function loadSongs() {
    let files = await fs.readdir(path.join("songs"))
    files.forEach((file) => {
        if (file.endsWith(".txt")) {
            songs.push(file)
        }
    })
}
loadSongs()


const app = express()
const PORT = process.env.PORT || 3003

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", async (req, res) => {
    let indexHTML = await fs.readFile("index.html", "utf8")

    res.status(200).send(
        indexHTML
    )
})

app.get("/songList", (_, res) => {
    res.status(200).send(songs)
})

})
