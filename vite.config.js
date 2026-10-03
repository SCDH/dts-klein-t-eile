import { defineConfig } from "vite";
import inject from '@rollup/plugin-inject';

export default defineConfig({
    plugins: [
	// this replaces the script loading of htmx.org in index.html
	// and correctly sets the window.htmx global variable. See
	// https://github.com/bigskysoftware/htmx-extensions/issues/128
	inject({
	    htmx: 'htmx.org'
	})
    ]
})
