import express from 'express';
import "dotenv/config";
import { connectDB } from './constants/dbConnection.js';
import userRouter from './routes/userRoutes.js';
import productRouter from './routes/productRoutes.js';
import http from "http";
import cors from "cors";

import {Server} from "socket.io";

const app = express();
app.use(express.json());
const server = http.createServer(app)
app.use(cors({
    origin:"http://localhost:5173",
    methods:["GET", "POST"],
    allowedHeaders:["Content-Type"]

}))

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:5173',  // Vite frontend
        methods: ['GET', 'POST'],
    }
});

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('chat message', (msg) => {
        console.log('Message received: ' + msg);
        io.emit('chat message', msg);
    });

    // Handle disconnection
    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

connectDB();


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use("/api/v1/users", userRouter);
app.use("/api/v1/products", productRouter);


server.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});