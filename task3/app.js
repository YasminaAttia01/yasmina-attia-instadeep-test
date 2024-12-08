import express from "express";
import dotenv from 'dotenv';
import pool from './config/db.js'
dotenv.config();



import taskRoutes from './routes/taskRoutes.js'
import errorHandler from './middlewares/errorHandler.js'
import cors from 'cors';


const app = express()
const PORT = process.env.PORT || 3001;

app.use(cors())

app.use("/api",taskRoutes);
app.use(errorHandler);


pool.connect((err, client, release) => {
  if (err) {
    console.error('Erreur de connexion à la base de données', err.stack);
    process.exit(1); 
  } else {
    console.log('Connecté à la base de données');
    release(); 
  }
});


app.listen(PORT, () => {
    console.log(`App running on port  ${PORT}.`)
  })
