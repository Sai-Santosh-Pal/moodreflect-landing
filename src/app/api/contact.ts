import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;
    // Here you could send an email, store in a database, etc.
    // For now, just log and return success
    console.log('Contact form submission:', { name, email, message });
    return res.status(200).json({ success: true });
  }
  res.setHeader('Allow', ['POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
} 