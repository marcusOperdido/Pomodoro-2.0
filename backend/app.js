import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import admin from "./routes/admin.js";
import pomodoro from "./routes/pomodoro.js";
import mongoose from "mongoose";










const app = express();


async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("✅ MongoDB conectado");
  } catch (err) {
    console.log("❌ Erro MongoDB:", err);
    process.exit(1); 
  }
}  connectDB();


  
// Middlewares
app.use(cors());
app.use(express.json());





// Rotas
app.use("/admin", admin);
app.use("/pomodoro", pomodoro);


app.get("/api", (req, res) => {
  res.json({ status: "ok" });
});



app.listen(3030, () => {
  console.log("Servidor rodando na porta 3030");
});