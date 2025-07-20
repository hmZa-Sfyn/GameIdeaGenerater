import express, { Request, Response } from 'express';
import cors from 'cors';
import { generateGameIdea } from './ideaGenerator.js';

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.static('react-app/dist'));

app.get('/api/idea', (_req: Request, res: Response) => {
    res.json({ idea: generateGameIdea() });
});

app.listen(PORT, () => {
    console.log(`Game Idea Generator backend running on http://localhost:${PORT}`);
});
