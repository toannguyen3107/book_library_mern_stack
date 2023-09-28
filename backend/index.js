import express, { request, response } from "express";
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';



//
const app = express();
// Middleware for handling CORS POLICY
//Option 1: Allow All Origins with Default of cors(*)
app.use(cors())
//enable json express
app.use(express.json());
// main route
app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send("hello world");
});
//route books
app.use('/books', booksRoute);

//database
mongoose.connect(mongoDBURL)
    .then(() => {
        console.log('Connected!');
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });
    }).catch((e) => { console.log(e) });
