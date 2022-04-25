import express from 'express';
import dotenv from 'dotenv';

import routes from './route.js';
import connectDB from './db.js';
import cors from 'cors';
dotenv.config();
const PORT = process.env.PORT || 5000;

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

//Все пути
app.use('/cards', routes);
// Основной путь
app.get('/', (req, res) => {
	res.send('API is running....');
});

app.listen(
	PORT,
	console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
