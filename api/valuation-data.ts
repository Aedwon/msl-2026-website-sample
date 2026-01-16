import Redis from 'ioredis';

export const config = {
    runtime: 'nodejs',
};

const KEY = 'msl_valuation_data';

export default async function handler(request: Request) {
    let redis;
    try {
        if (!process.env.REDIS_URL) {
            throw new Error("Missing REDIS_URL environment variable");
        }

        redis = new Redis(process.env.REDIS_URL);

        if (request.method === 'GET') {
            const data = await redis.get(KEY);
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
            return new Response(JSON.stringify({ success: true, timestamp: Date.now() }), {
                status: 200,
                headers: { 'content-type': 'application/json' },
            });
        }

        return new Response('Method not allowed', { status: 405 });
    } catch (error) {
        console.error('API Error:', error);
        return new Response(JSON.stringify({ error: 'Internal Server Error', details: error instanceof Error ? error.message : String(error) }), {
            status: 500,
            headers: { 'content-type': 'application/json' },
        });
    } finally {
        if (redis) {
            redis.quit();
        }
    }
}
