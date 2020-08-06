import express from 'express';

const app = express();

app.use(express.json())

app.get('/', (req, res) => {
  return res.json({message: "hello"})
});

app.listen(3333, () => {
  console.log("aplicação rodando em => http://localhost:3333")
})