// import react from '@vitejs/plugin-react';
// import { defineConfig } from 'vite';


// base: './' 讓打包後的資源使用相對路徑，
// 以便部署到 GitHub Pages 的任意子路徑（如 /repo-name/）都能正常載入。
// export default defineConfig({
//   plugins: [react()],
//   base: './',
// });

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig(({command}) => ({
  plugins: [react()],
  base: command === 'build' ? '/frontend-group-project/' : '/',
}))

