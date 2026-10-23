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

// mengambil data dari database
app.get("/api/divisions", async (_req, res) => {
  try {
    const result = await pool.query(
      `SELECT id, name, slug, category, description FROM public.divisions WHERE is_published = TRUE ORDER BY id ASC`,
    );

    res.json(result.rows);
  } catch (error) {
    console.error("Failed to fetch divisions:", error);

    res.status(500).json({
      message: "Gagal mengambil data divisions",
    });
  }
});

app.post("/api/divisions", async (req, res) => {
  const { name, slug, category, description } = req.body;

  if (!name || !slug || !category || !description) {
    return res.status(400).json({
      error: "Semua field wajib diisi",
    });
  }

  try {
    const result = await pool.query(
      `INSERT INTO public.divisions (name, slug,category,description) VALUES ($1,$2,$3,$4) RETURNING id, name,slug,category,description`,
      [name, slug, category, description],
    );

    res.status(201).json({
      message: "Division berhasil ditambahkan",
      data: result.rows[0],
    });
  } catch (error) {
    if (
      typeof error === "object" &&
      error !== null &&
      "code" in error &&
      error.code === "23505"
    ) {
      return res.status(409).json({
        message: "slug sudah digunaknan, gunakan slug yang berbeda",
      });
    }
    console.error("Failed to create division:", error);

    res.status(500).json({
      message: "Gagal menambahkan division",
    });
  }
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
