import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import songsRouter from './routes/songsRouter.js';
import mongoose from 'mongoose';

const app = express();

const PORT = process.env.PORT;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(songsRouter);


app.get('/', (request, response) => {
    return response.send('Welcome to my API');
});

const mongoDB = process.env.MONGO_URL
mongoose.connect(mongoDB);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));




app.listen(PORT, () => console.log(`Server is running on port ${PORT} 🟢`));