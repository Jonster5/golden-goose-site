import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { ViteToml as toml } from 'vite-plugin-toml';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [toml(), svelte()],
	server: {
		host: true,
	},
});
