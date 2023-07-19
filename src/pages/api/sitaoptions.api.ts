import { NextApiRequest, NextApiResponse } from 'next';

interface Airport {
  value: string;
  label: string;
}

const airports: Airport[] = [
  { value: 'DOH', label: 'Hamad International Airport (DOH)' },
  { value: 'HND', label: 'Haneda Airport (HND)' },
  { value: 'SIN', label: 'Singapore Changi Airport (SIN)' },
  { value: 'ICN', label: 'Incheon International Airport (ICN)' },
  { value: 'NRT', label: 'Narita International Airport (NRT)' },
  { value: 'MUC', label: 'Munich Airport (MUC)' },
  { value: 'ZRH', label: 'Zurich Airport (ZRH)' },
  { value: 'LHR', label: 'Heathrow Airport (LHR)' },
  { value: 'KIX', label: 'Kansai International Airport (KIX)' },
  { value: 'HX', label: 'Hong Kong International Airport (HX)' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const search = req.query.search;

  if (typeof search === 'string') {
    const cleanedSearch = search.replace(/[<>]/g, '');
    const filteredOptions = airports.filter((option) =>
      option.label.toLowerCase().includes(cleanedSearch.toLowerCase())
    );

    if (filteredOptions.length > 0) {
      res.status(200).json({ options: filteredOptions });
    } else {
      res.status(404).json({ message: 'No options found' });
    }
  } else {
    res.status(400).json({ error: 'Invalid search query' });
  }
}
