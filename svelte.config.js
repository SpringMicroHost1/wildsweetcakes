import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import importAssets from 'svelte-preprocess-import-assets'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [preprocess(), importAssets()],

	kit: {
		adapter: adapter({
			// if true, will create a Netlify Edge Function rather
			// than using standard Node-based functions
			edge: false,
	  
			// if true, will split your app into multiple functions
			// instead of creating a single one for the entire app.
			// if `edge` is true, this option cannot be used
			split: false
		  })
	},

	vitePlugin: {
	  experimental: {
		useVitePreprocess: true
	  }
	},
};

export default config;
