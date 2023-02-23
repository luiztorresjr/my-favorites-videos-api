const mongoose = require('mongooge');

mongoose.connect("connect")

let db = mongoose.connection

module.export = db