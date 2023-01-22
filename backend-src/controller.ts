import express from 'express';
import tesseract from 'tesseract.js';

export const apiUrl = '/recognize-img-text';

const router = express.Router();
const jsonParser = express.json();

router.post('/', jsonParser, async (req, res) => {
  const { imgSrc } = req.body;

  const { data } = await tesseract.recognize(imgSrc);

  res.json({ phoneText: data.text });
});

export default router;
