import { z } from 'zod';

const configSchema = z.object({
	NEXT_PUBLIC_API_HOST: z.string()
});

const config = configSchema.safeParse({
	NEXT_PUBLIC_API_HOST: process.env.NEXT_PUBLIC_API_HOST
});

if (!config.success) {
	throw new Error('Invalid config');
}

export default config.data;
