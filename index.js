import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const corsOptions = {
  origin: ["http://localhost:3040"],
};
app.use(cors(corsOptions));

const port = process.env.PORT || 3040;

const email = process.env.EMAIL
const githubUrl = process.env.GITHUB_URL;

app.get("/", (req, res) => {
  try {
    res.status(200).json({
      email: email,
      current_datetime: new Date().toISOString(),
      github_url: githubUrl,
    });
  } catch (error) {
    res.status(500).json("internal error");
  }
});
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

export default app;
