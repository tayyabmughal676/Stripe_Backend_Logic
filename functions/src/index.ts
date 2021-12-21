import * as functions from "firebase-functions";
import * as express from 'express'
import * as cors from 'cors'

// IMPORT ROUTES
const paymentRoute = require("./controllers/paymentController");


// MIDDLEWARES
const app = express()
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

// ROUTE MIDDLEWARES
app.use('/payment', paymentRoute);

export const appApi = functions.https.onRequest(app)
