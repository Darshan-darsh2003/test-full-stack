import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import blogsRoutes from './routes/blogsRoutes.js';
import usersRoutes from './routes/usersRoutes.js';
const app = express();
const PORT = 5000;
app.use(cors());
app.use(bodyParser.json());
app.use('/api/blogs', blogsRoutes);
app.use('/api/users', usersRoutes);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
//# sourceMappingURL=index.js.map