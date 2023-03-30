// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'
// // https://vitejs.dev/config/
// export default defineConfig({
// base: "/art-enjoy/",
// plugins: [react()],
// test: {
// environment: "jsdom",
// globals: true
// }
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
 
})