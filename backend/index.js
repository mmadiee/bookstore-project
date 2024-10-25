import express from "express"
import * as dotenv from 'dotenv';
dotenv.config();
import mongoose from "mongoose"
import booksRoute from "./routes/booksRoute.js"
import cors from 'cors'

const app = express();

//Middleware for parsing request body
app.use(express.json());

//Middleware for handling CORS POLICY
app.use(cors())

//ENV VARIABLES
const port = process.env.PORT 
const mongoDbUrl = process.env.MONGODBURL

app.get('/', (req, res) => {
    console.log(req)
    return res.status(234).send('Welcome to MERN stack tutorial')
});

app.use('/books', booksRoute)


mongoose
    .connect(mongoDbUrl)
    .then(() => {
        console.log("App connected to the database")
        app.listen(port, () => {
            console.log(`App is listening to port: ${port}`)
        })
    })
    .catch((error) => {
        console.log(error);
    })