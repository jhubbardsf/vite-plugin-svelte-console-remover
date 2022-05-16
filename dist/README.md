# vite-plugin-svelte-console-remover

[![npm](https://img.shields.io/npm/v/vite-plugin-svelte-console-remover?style=flat-square)](https://www.npmjs.com/package/vite-plugin-svelte-console-remover)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/vite-plugin-svelte-console-remover?style=flat-square)](https://www.npmjs.com/package/vite-plugin-svelte-console-remover)
[![GitHub last commit](https://img.shields.io/github/last-commit/jhubbardsf/vite-plugin-svelte-console-remover?style=flat-square)](https://github.com/jhubbardsf/vite-plugin-svelte-console-remover)
<a href="https://www.buymeacoffee.com/jhubbard"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=jhubbard&button_colour=FFDD00&font_colour=000000&font_family=Poppins&outline_colour=000000&coffee_colour=ffffff" height=20 /></a>

A vite plugin that removes all console statments (log, group, dir, error, etc) in production from svelte, js, and ts files during build so they don't leak into production.

## Example Use

```js
import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import removeConsole from 'vite-plugin-svelte-console-remover';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		adapter: adapter(),
		vite: {
			plugins: [removeConsole()],
		}
	}
}

export default config;
```
