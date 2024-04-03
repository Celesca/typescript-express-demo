import type { Request, Response } from 'express';
import { core } from '@tscc/core';
import express from 'express';

const router = express.Router();

router.use('/', (req: Request, res: Response ) => {
  res.json({ message: "Hello" + core()});

})

export default router;