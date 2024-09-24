const express = require('express');
const app = express();
const connectDB = require('./src/database/db');
const livroRouter = require('./src/routes/livro.route');
const port = 3000; 

connectDB()

app.use(express.json())
app.use(livroRouter);

app.listen(port, () => console.log(`servidor rodando na porta ${port}\n\nlocalhost:3000/livros POST\nlocalhost:3000/todos GET\nlocalhost:3000/livros/ GET`))