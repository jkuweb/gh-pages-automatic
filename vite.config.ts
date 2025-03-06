import react from '@vitejs/plugin-react-swc';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import type { UserConfig as VitestUserConfigInterface } from 'vitest/config';
const vitestConfig: VitestUserConfigInterface = {
	test: {
		globals: true,
	},
};

export default defineConfig({
	plugins: [checker({ typescript: false }), react()],
	test: vitestConfig.test,
	base: './',
	envPrefix: 'PUBLIC_',
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
	css: {
		modules: {
			localsConvention: 'camelCase',
			generateScopedName: '[name]__[local]__[hash:base64:4]',
		},
	},
});
