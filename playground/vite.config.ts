import { defineConfig } from 'vite'
import tauri from 'vite-plugin-tauri-plus'

export default defineConfig({
    plugins: [tauri()],
})