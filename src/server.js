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

const whitelist = ['https://www.thegirheritageresort.com', 'https://www.thegirheritageresort.com','http://localhost:3000']
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error())
    }
  },
methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}


// enabling cors for all requests by using cors middleware
/*var corsOptions = {
  origin: ['https://www.thegirheritageresort.com','https://thegirheritageresort.com',''],
methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
// optionsSuccessStatus: 200 
}*/
// console.log(corsOptions)
app.use(cors(corsOptions));
// Enable pre-flight
// app.options("https://www.thegirheritageresort.com", cors());

const PORT = process.env.PORT || process.env.APP_PORT;

app.use(`/girresort/api/web/users`, userRouter);

var server = app.listen(PORT, () =>
    console.log(`🚀 Server running on port ${PORT}!`));
server.timeout = 120000;

export default app;
