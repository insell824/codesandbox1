import express from "express";

const router = express.Router();

router.get("/a", async (req, res, next) => {
  try {
    res.status(200).json({ message: "ok." });
  } catch (err) {
    console.log(err?.message);
    res.status(500).json({ message: err?.message || "Unknown Error." });
  }
});

const wait = (milli) => new Promise((r) => setTimeout(r, milli));

router.get("/waiter", async (req, res, next) => {
  try {
    await wait(11 * 1000);
    res.status(200).json({ message: "ok." });
  } catch (err) {
    console.log(err?.message);
    res.status(500).json({ message: err?.message || "Unknown Error." });
  }
});

export default router;
