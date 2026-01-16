import Redis from 'ioredis';

export const config = {
    runtime: 'nodejs',
};

const KEY = 'msl_valuation_data';

export default async function handler(request: Request) {
    console.log('[API] Request started');
    let redis;
    try {
        if (!process.env.REDIS_URL) {
            throw new Error("Missing REDIS_URL environment variable");
        }

        redis = new Redis(process.env.REDIS_URL);
        console.log('[API] Connected to Redis');

        if (request.method === 'GET') {
            const data = await redis.get(KEY);
            console.log('[API] GET data fetched');
            return new Response(data || 'null', {
                status: 200,
                headers: {
                    'content-type': 'application/json',
                    'Cache-Control': 'no-store, max-age=0'
                },
            });
        }

        if (request.method === 'POST') {
            const body = await request.json();
            // Store as string since ioredis expects a string value
            await redis.set(KEY, JSON.stringify(body));
            console.log('[API] POST data saved');
            return new Response(JSON.stringify({ success: true, timestamp: Date.now() }), {
                status: 200,
                headers: { 'content-type': 'application/json' },
            });
        }

        return new Response('Method not allowed', { status: 405 });
    } catch (error) {
        console.error('[API] Error:', error);
        return new Response(JSON.stringify({ error: 'Internal Server Error', details: error instanceof Error ? error.message : String(error) }), {
            status: 500,
            headers: { 'content-type': 'application/json' },
        });
    } finally {
        if (redis) {
            console.log('[API] Quitting Redis connection...');
            await redis.quit();
            console.log('[API] Redis connection closed');
        }
    }
}
