# vite-plugin-svelte-console-remover

[![npm](https://img.shields.io/npm/v/vite-plugin-svelte-console-remover?style=flat-square)](https://www.npmjs.com/package/vite-plugin-svelte-console-remover)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/vite-plugin-svelte-console-remover?style=flat-square)](https://www.npmjs.com/package/vite-plugin-svelte-console-remover)
[![GitHub last commit](https://img.shields.io/github/last-commit/jhubbardsf/vite-plugin-svelte-console-remover?style=flat-square)](https://github.com/jhubbardsf/vite-plugin-svelte-console-remover)
<a href="https://www.buymeacoffee.com/jhubbard"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=jhubbard&button_colour=FFDD00&font_colour=000000&font_family=Poppins&outline_colour=000000&coffee_colour=ffffff" height=20 /></a>

A Vite plugin that removes all console statements (log, group, dir, error, etc) from Svelte, JS, and TS files during build so they don't leak into production.

---

**What this doesn't do**: This does not remove **anything** from your codebase. Your console.logs will still be there. You'll still see them in development and any other non-production environment.

**What this does**: Removes all console statements from appearing on your production domain. They're removed during the build/tranform step, so they're stripped out of your production code.

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
