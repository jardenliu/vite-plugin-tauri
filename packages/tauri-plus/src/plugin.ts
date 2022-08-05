import type { PluginOption } from 'vite'
import { run } from '@tauri-apps/cli'
import { getTauriArgs } from './utils'

export type TauriBundle = 'deb' | 'appimage' | 'msi' | 'app' | 'dmg' | 'updater'

export interface TauriPluginOptions {
    bundles?: TauriBundle[],
    config?: string,
    debug?: boolean,
    exitOnPanic?: boolean,
    release?: boolean,
    verbose?: boolean,
    features? : string[],
    target? : string,
    runner? : string,
}

export interface TauriOptionConfig {
    [x: string] : {
        name?: string,
        type: typeof String | typeof Boolean | typeof Array<any> | typeof Number,
    }
}

const COMMON_OPTION_CONFIG: TauriOptionConfig = {
    config: {
        type: String,
    },
    features: {
        type: Array,
    },
    runner: {
        type: String,
    },
    target: {
        type: String,
    },
    verbose: {
        type: Boolean,
    },
}

const SVERVE_OPTION_CONFIG = {
    exitOnPanic: {
        type: Boolean,
        name: 'exit-on-panic',
    },
    release: {
        type: Boolean,
    },
}

const BUILD_OPTION_CONFIG = {
    bundles: {
        type: Array,
    },
    debug: {
        type: Boolean,
    },
}

export const tauriPlugin = (options: TauriPluginOptions = {}): PluginOption => {
    const prefix = `vite-plugin-tauri-plus-`

    return [
        {
            name: `${prefix}-serve`,
            apply: 'serve',
            configureServer: (server) => {
                server.httpServer?.on('listening', () => {
                    const args = getTauriArgs(options, {
                        ...COMMON_OPTION_CONFIG,
                        ...SVERVE_OPTION_CONFIG,
                    })
                    run(['dev', ...args], 'vite')
                })
            },
        },
        {
            name: `${prefix}-build`,
            apply: 'build',
            buildEnd: async (ctx, err?) => {
                if (err) return
                const args = getTauriArgs(options, {
                    ...COMMON_OPTION_CONFIG,
                    ...BUILD_OPTION_CONFIG,
                })
                run(['build', ...args], 'vite')
            },
        }
    ]
}