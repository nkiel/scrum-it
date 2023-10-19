import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send(`Hello World!<br/>${new Date(Date.now()).toUTCString()}`);
});

export default router;
