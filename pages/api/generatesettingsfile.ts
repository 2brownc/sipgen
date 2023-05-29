import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const name = req.body.name;
    const message = req.body.message;
    res.status(200).json({ status: 'success' });
  }
}