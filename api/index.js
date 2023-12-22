import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'
dotenv.config();

// connect with database


mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    console.log(err);
  });


const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("Server is running at post 3000 !!");
});



app.use("/api/user", userRouter);
app.use('/api/auth', authRouter);

