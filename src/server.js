import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';


// Init express
const app = express();
// Init environment
dotenv.config();

// parse requests of content-type: application/json
// parses incoming requests with JSON payloads
app.use(express.json());
app.use(express.urlencoded({extended: true}));


import userRouter from './routes/user.route.js';

// enabling cors for all requests by using cors middleware
app.use(cors());
// Enable pre-flight
app.options("*", cors());

const PORT = process.env.PORT || process.env.APP_PORT;

app.use(`/girresort/api/web/users`, userRouter);

var server = app.listen(PORT, () =>
    console.log(`🚀 Server running on port ${PORT}!`));
server.timeout = 120000;

export default app;