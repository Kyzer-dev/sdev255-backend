// setup
const port = 3000
const express = require('express')
const router = express.Router()
var cors = require('cors')
const app = express() // assigns an express server
app.use(cors()) // needed for same device stuff
app.use('/api', router)


/* OLD - EARLY TUTORIAL
activates web server (port,func)
app.listen(port,function(){
    console.log("Listening on port 3000")
})

functions have param/response
GET (regular request) http://localhost:3000/hello
app.get('/hello', function(req,res){
    res.send("<h1>Hello Express</h1>")
})

app.get('/goodbye', function(req,res){
    res.send('<h1>Goodhye, Express</h1>')
})

making an api using routes (handles browser requests)
Routes
*/

router.get('/songs',function(req,res){
    const songs = [
        //     {
        //     title: "Uptown Funk",
        //     artist: "Bruno Mars",
        //     popularity: 10,
        //     releaseDate: new Date(2014,11,10),
        //     genre: ['funk', 'boogie']
        // },
        {
            title: "We Found Love",
            artist: "Rihanna",
            popularity: 10,
            releaseDate: new Date(2011,9,22),
            genre: ['electro house']
        },
        {
            title: "Happy",
            artist: "Pharrell Williams",
            popularity: 10,
            releaseDate: new Date(2013,11,21),
            genre: ['soul', 'new soul']
        }
    ];

    res.json(songs)
})

// all requests that use an api typically start with /api directory

app.listen(port,function(){
    console.log("Running on port " + port)
})