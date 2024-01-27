// module.exports = {
//   // plugins: {
//   //   'postcss-nesting': { 
//   //     tailwindcss: {},
//   //     autoprefixer: {}, 
//   //   },
//   // },
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// }

import { defineConfig } from 'vite';
import postcssNesting from 'postcss-nesting';

// export default defineConfig({
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//     postcssNesting: {},
//   },
// })

export default defineConfig({
    css: {
        postcss: {
            plugins: [
                postcssNesting,
            ],
        },
    },
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    }
});