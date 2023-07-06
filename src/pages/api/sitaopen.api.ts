import { NextApiRequest, NextApiResponse } from 'next';

function getRandomNumber(min:number, max:number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Handle the request
  if (req.method === 'GET') {
    // Perform any necessary data fetching or processing
    const data = { distance: getRandomNumber(1, 1000)}

    // Reply with JSON
    res.status(200).json(data);
  } else {
    // Return an error for unsupported request methods
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
