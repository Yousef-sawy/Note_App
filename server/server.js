import express from 'express';
import cors from 'cors';
import noteRoutes from './routes/noteRoutes.js';

const app = express();


app.use(cors({
    origin: 'http://localhost:9000', // Change this if frontend runs on a different port
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type']
}));

app.use(express.json());


app.use((req, res, next) => {
    console.log(`[${req.method}] ${req.path}`, req.body);
    next();
});


app.use('/api/notes', noteRoutes);


app.use((req, res) => {
    res.status(404).json({ message: 'Route Not Found 🚫' });
});


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong 💩' });
});


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
