import express from "express";
import userRoutes from "./routes/userRoutes.js";
import cors from "cors";
import "./db/mongoose.js"; // Ensure database connection is established

const app = express();
app.use(cors({
  origin: "http://localhost:5173", // Replace with your frontend URL
  credentials: true,
}))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
