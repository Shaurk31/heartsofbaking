import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Preprocessor for Svelte
	preprocess: vitePreprocess(),

	kit: {
		// Use Vercel adapter with a specified Node.js runtime
		adapter: adapter({
			runtime: 'nodejs18.x' // Specify Node.js runtime (e.g., 18.x or 20.x)
		}),
	}
};

export default config;
