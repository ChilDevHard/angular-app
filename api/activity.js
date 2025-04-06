import fetch from 'node-fetch'; 

export default async function handler(req, res) {
  try {
    const response = await fetch('https://bored-api.appbrewery.com/random');
    const data = await response.json();

    res.setHeader('Access-Control-Allow-Origin', '*'); 
    res.status(200).json(data);
  } catch (error) {
    console.error('[API Error]', error);
    res.status(500).json({ error: 'Failed to fetch activity' });
  }
}
