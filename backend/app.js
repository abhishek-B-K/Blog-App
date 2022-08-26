import express, { application } from 'express';
import mongoose from 'mongoose';
import router from './routes/user-routes';
import blogRouter from './routes/blog-routes';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user",router); 
app.use("/api/blog",blogRouter);

mongoose
  .connect('mongodb+srv://Admin:nZJwqE4im9gH5j8p@cluster0.jhd2ktb.mongodb.net/Blog?retryWrites=true&w=majority'
  )
  .then(()=>app.listen(5000))
  .then(()=>console.log("Connected To Database and Listening To Localhost 5000")
  )
  .catch((err)=>console.log(err));




//nZJwqE4im9gH5j8p

