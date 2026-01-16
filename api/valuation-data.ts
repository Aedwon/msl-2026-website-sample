import Redis from 'ioredis';

export const config = {
    runtime: 'nodejs',
};

const KEY = 'msl_valuation_data';

export default async function handler(req: any, res: any) {
    console.log('[API] Request started');
    let redis;
    try {
        if (!process.env.REDIS_URL) {
            throw new Error("Missing REDIS_URL environment variable");
        }

        redis = new Redis(process.env.REDIS_URL);
        console.log('[API] Connected to Redis');

        if (req.method === 'GET') {
            const data = await redis.get(KEY);
            console.log('[API] GET data fetched');
            // Data is stored as a JSON string in Redis. Parse it before sending so res.json doesn't double-encode it.
            const parsedData = data ? JSON.parse(data) : null;
            return res.status(200).json(parsedData);
        }

        if (req.method === 'POST') {
            // In Vercel Node.js runtime, req.body is automatically parsed for application/json
            const body = req.body;

            // Store as string since ioredis expects a string value
            await redis.set(KEY, JSON.stringify(body));
            console.log('[API] POST data saved');
            return res.status(200).json({ success: true, timestamp: Date.now() });
        }

        return res.status(405).json({ error: 'Method not allowed' });
    } catch (error) {
        console.error('[API] Error:', error);
        return res.status(500).json({ error: 'Internal Server Error', details: error instanceof Error ? error.message : String(error) });
    } finally {
        if (redis) {
            console.log('[API] Quitting Redis connection...');
            await redis.quit();
            console.log('[API] Redis connection closed');
        }
    }
}
