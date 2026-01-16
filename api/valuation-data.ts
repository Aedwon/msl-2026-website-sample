import { kv } from '@vercel/kv';

export const config = {
    runtime: 'edge',
};

const KEY = 'msl_valuation_data';

export default async function handler(request: Request) {
    try {
        if (request.method === 'GET') {
            const data = await kv.get(KEY);
            return new Response(JSON.stringify(data || null), {
                status: 200,
                headers: {
                    'content-type': 'application/json',
                    'Cache-Control': 'no-store, max-age=0'
                },
            });
        }

        if (request.method === 'POST') {
            const body = await request.json();
            await kv.set(KEY, body);
            return new Response(JSON.stringify({ success: true, timestamp: Date.now() }), {
                status: 200,
                headers: { 'content-type': 'application/json' },
            });
        }

        return new Response('Method not allowed', { status: 405 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
            status: 500,
            headers: { 'content-type': 'application/json' },
        });
    }
}
