import express from 'express';
import songs from '../data/songs.js';

const songsRouter = express.Router();


songsRouter.get('/songs', (req, res) => {
    return res.json(songs);
});

songsRouter.get('/songs/:songID', (req, res) => {
    let songID = req.params.songID;
    let song = songs.find(element => element.id == songID);
    return res.json(song);
});

songsRouter.post('/songs', (req, res) => {
    console.log(req.body);
    let newSong = {
        id : songs.length + 1,
        title : req.body.title,
        artist : req.body.artist,
    }
    songs.push(newSong);
    return res.status(201).json(newSong);
});

export default songsRouter