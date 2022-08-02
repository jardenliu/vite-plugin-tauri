import type { PluginOption } from 'vite'
import { run } from '@tauri-apps/cli'

export const tauriPlugin = (): PluginOption => {
    const prefix = `vite-plugin-tauri-plus-`
    return [
        {
            name: `${prefix}-serve`,
            apply: 'serve',
            configureServer: (server) => {
                server.httpServer?.on('listening', () => {
                    setTimeout(() => {
                        run(['dev'], 'vite')
                    }, 2000)
                })
            },
        },
        {
            name: `${prefix}-build`,
            apply: 'build',
            buildEnd: async (ctx, err?) => {
                if (err) return
                setTimeout(() => {
                    run(['build'], 'vite')
                }, 2000)
            },
        }
    ]
}