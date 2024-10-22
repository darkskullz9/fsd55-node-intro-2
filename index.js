import express from 'express';
import 'dotenv/config';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT;
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const songs = [
    {
        id: 1,
        title: 'Welcome to Jamrock',
        artist: 'Damian Marley',
        link: 'https://souncloud.com/'
    },
    {
        id: 2,
        title: 'La vie qu&apos;on mène',
        artist: 'Krys',
        link: 'https://souncloud.com/'
    },
    {
        id: 3,
        title: 'Gwadada',
        artist: 'Admiral-T',
        link: 'https://souncloud.com/'
    }
]

app.get('/', (request, response) => {
    return response.send('Welcome to my API');
});

app.get('/songs', (req, res) => {
    return res.json(songs);
});

app.get('/songs/:songID', (req, res) => {
    let songID = req.params.songID
    let song = songs.find(element => element.id == songID)
    return res.json(song)
});

app.post('/songs', (req, res) => {
    let newsong = {
        id: songs.length + 1,
        title: req.body.title,
        artist: req.body.artist
    }
    songs.push(newsong)
    return res.json(newsong)
})

app.get('/users', (req, res) => {
    return res.send('Hello users');
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT} 🟢`));