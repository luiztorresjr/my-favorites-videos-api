const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema(
    {
        id: {type: String},
        title: {type: String, required: true},
        descricao: {type: String},
        url: {type: String}
    }{
        versionKey: false
    }
)

const videos = mongoose.model('videos', videoSchema)

module.exports = videos;
