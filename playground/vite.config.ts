import { defineConfig } from 'vite'
import tauri from 'vite-plugin-tauri-plus'

export default defineConfig({
    plugins: [
        tauri({
            bundles: ['deb', 'app', 'dmg'],
            debug: true,
            exitOnPanic: true,
            release: true,
            runner: 'cargo',
        })
    ],
})