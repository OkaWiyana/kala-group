import express from "express";
import cors from "cors";
import "dotenv/config";
import { pool } from "./db";

// membuat aplikasi server
const app = express();
// memungkinkan req dari frontend
const PORT = process.env.PORT || 3000;

// MIDDLEWARE
app.use(cors());
// memungkingkan server membaca req body berformat JSON
app.use(express.json());

const division = [
  {
    id: 1,
    name: "Kala Archives",
    slug: "kala-archives",
    category: "Photography",
    description:
      "Photography and visual documentation that preserve meaningful moments.",
  },
  {
    id: 2,
    name: "Kala Sport",
    slug: "kala-sport",
    category: "Sport & Running",
    description:
      "A space for running, movement, and the pursuit of an active lifestyle.",
  },
];

app.get("/api/db-test", async (_req, res) => {
  try {
    const result = await pool.query("SELECT NOW() AS server_time");

    res.json({
      connected: true,
      serverTime: result.rows[0].server_time,
    });
  } catch (error) {
    console.error("Database connection error:", error);
    res.status(500).json({
      connected: false,
      message: "Database connection failed",
    });
  }
});

app.get("/api/divisions", (_req, res) => {
  res.json(division);
});

// membuat endpoint untuk menerima HTTP GET pada /
app.get("/", (_req, res) => {
  res.json({
    message: "API KALA GROUP is running",
  });
});

// menjalankan server pada port yang telah ditentukan
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
