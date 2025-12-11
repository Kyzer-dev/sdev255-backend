const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://USER:PASS@songdb.mlmiecm.mongodb.net/?appName=songdb")

module.exports = mongoose