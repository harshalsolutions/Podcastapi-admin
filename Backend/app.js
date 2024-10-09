import express from 'express';
import cors from "cors";


export const app = express();

app.use(express.json());

const allowedOrigins = [process.env.ADMIN_FRONTEND_URL, 'http://localhost:5173'];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            console.log('CORS blocked origin:', origin);
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true
}));
