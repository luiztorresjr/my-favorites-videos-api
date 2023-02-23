const videos = require('../models/Videos.js');

class VideoController{
    static listVideo = (req, res) =>{
        videos.find((err, videos)=>{
            res.status(200).json(videos)
        })
    }

}