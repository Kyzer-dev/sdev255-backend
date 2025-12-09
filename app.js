// setup
const port = 3000
const express = require('express')
const router = express.Router()
var cors = require('cors')
const app = express() // assigns an express server
const bodyParser = require("body-parser")
const Song = require("./models/songs")
app.use(cors()) // needed for same device stuff
app.use('/api', router)
app.use(bodyParser.json())
app.use(express.json())

// grab songs
router.get("/songs", async(req, res) => {
    try {
        const songs = await Song.find({})
        res.send(songs)
        console.log(songs)
    }
    catch (err){
        console.log(err)
    }
})

router.get("/songs/:id", async(req,res) =>{
    try{
        const song = await Song.findById(req.params.id)
        res.json(song)
    }
    catch (err){
        res.status(400).send(err)
    }
})

router.post("/songs", async(req,res) => {
    try{
        const song = await new Song(req.body)
        await song.save()
        res.status(201).json(song)
        console.log(song)
    }

    catch(err){
        res.status(400).send(err)
    }
})

router.put("/songs/:id", async(req,res) => {
    try{
        const song = req.body
        await Song.updateOne({_id: req.params.id},song)
        console.log(song)
        res.sendStatus(204)
    }
    catch(err){
        res.status(400).send(err)
    }
})

app.listen(port,function(){
    console.log("Running on port " + port)
})