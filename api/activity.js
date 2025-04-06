export default async function handler(req, res) {
  try {
    const fetch = (await import('node-fetch')).default;

    const response = await fetch('https://bored-api.appbrewery.com/random');
    const data = await response.json();

    res.setHeader('Access-Control-Allow-Origin', 'https://your-app.vercel.app'); // Replace with your domain
    res.status(200).json(data);
  } catch (error) {
    console.error('API error:', error);
    res.status(500).json({ error: 'Failed to fetch activity' });
  }
}
