const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://<user>:<password>@songdb.mlmiecm.mongodb.net/?appName=songdb")

module.exports = mongoose